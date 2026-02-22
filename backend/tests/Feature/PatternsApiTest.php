<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class PatternsApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(\Database\Seeders\PatternSeeder::class);
    }

    public function test_reveal_returns_pattern_json(): void
    {
        $id = DB::table('patterns')->value('id');
        $response = $this->getJson("/api/patterns/{$id}/reveal");
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'name',
            'intent',
            'when_to_use',
            'example_solution',
        ]);
    }

    public function test_reveal_returns_404_for_missing_pattern(): void
    {
        $response = $this->getJson('/api/patterns/99999/reveal');
        $response->assertStatus(404);
        $response->assertJson(['message' => 'Pattern not found']);
    }
}
