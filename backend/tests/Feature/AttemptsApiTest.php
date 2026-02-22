<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AttemptsApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(\Database\Seeders\PatternSeeder::class);
        $this->seed(\Database\Seeders\ChallengeSeeder::class);
    }

    public function test_store_returns_score_and_feedback(): void
    {
        $challengeId = \Illuminate\Support\Facades\DB::table('challenges')->value('id');
        $response = $this->postJson('/api/attempts', [
            'challenge_id' => $challengeId,
            'submitted_code' => "<?php\ninterface Strategy { public function execute(): string; }\nclass A implements Strategy { public function execute(): string { return 'a'; } }\nclass B implements Strategy { public function execute(): string { return 'b'; } }\nclass Context { public function __construct(private Strategy \$s) {} public function run(): string { return \$this->s->execute(); } }\n",
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure(['score', 'feedback']);
        $response->assertJsonFragment(['score' => $response->json('score')]);
    }

    public function test_store_returns_422_when_validation_fails(): void
    {
        $challengeId = \Illuminate\Support\Facades\DB::table('challenges')->value('id');
        $response = $this->postJson('/api/attempts', [
            'challenge_id' => $challengeId,
        ]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['submitted_code']);
    }

    public function test_store_returns_404_for_unknown_challenge(): void
    {
        $response = $this->postJson('/api/attempts', [
            'challenge_id' => 99999,
            'submitted_code' => '<?php echo 1;',
        ]);
        $response->assertStatus(404);
    }
}
