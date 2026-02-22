<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class ChallengesApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(\Database\Seeders\PatternSeeder::class);
        $this->seed(\Database\Seeders\ChallengeSeeder::class);
    }

    public function test_index_returns_challenge_list(): void
    {
        $response = $this->getJson('/api/challenges');
        $response->assertStatus(200);
        $response->assertJsonCount(5);
        $response->assertJsonStructure([
            '*' => ['id', 'title', 'expected_pattern', 'difficulty', 'language'],
        ]);
    }

    public function test_show_returns_challenge_json(): void
    {
        $id = DB::table('challenges')->value('id');
        $response = $this->getJson("/api/challenges/{$id}");
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'id',
            'pattern_id',
            'title',
            'language',
            'messy_code',
            'expected_pattern',
            'difficulty',
        ]);
    }

    public function test_show_returns_404_for_missing_challenge(): void
    {
        $response = $this->getJson('/api/challenges/99999');
        $response->assertStatus(404);
        $response->assertJson(['message' => 'Challenge not found']);
    }
}
