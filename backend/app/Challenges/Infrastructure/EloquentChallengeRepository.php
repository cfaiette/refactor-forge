<?php

namespace App\Challenges\Infrastructure;

use App\Challenges\Domain\Challenge;
use App\Challenges\Domain\ChallengeRepository;
use Illuminate\Support\Facades\DB;

final class EloquentChallengeRepository implements ChallengeRepository
{
    public function getById(int $id): ?Challenge
    {
        $row = DB::table('challenges')
            ->join('patterns', 'challenges.pattern_id', '=', 'patterns.id')
            ->where('challenges.id', $id)
            ->select('challenges.id', 'challenges.pattern_id', 'challenges.title', 'challenges.language', 'challenges.messy_code', 'challenges.difficulty', 'patterns.name as pattern_name')
            ->first();

        if ($row === null) {
            return null;
        }

        return new Challenge(
            id: (int) $row->id,
            patternId: (int) $row->pattern_id,
            title: $row->title,
            language: $row->language,
            messyCode: $row->messy_code,
            expectedPattern: $row->pattern_name,
            difficulty: $row->difficulty,
        );
    }

    public function list(): array
    {
        $rows = DB::table('challenges')
            ->join('patterns', 'challenges.pattern_id', '=', 'patterns.id')
            ->select('challenges.id', 'challenges.pattern_id', 'challenges.title', 'challenges.language', 'challenges.difficulty', 'patterns.name as pattern_name')
            ->orderBy('challenges.id')
            ->get();

        $challenges = [];
        foreach ($rows as $row) {
            $challenges[] = new Challenge(
                id: (int) $row->id,
                patternId: (int) $row->pattern_id,
                title: $row->title,
                language: $row->language,
                messyCode: '',
                expectedPattern: $row->pattern_name,
                difficulty: $row->difficulty,
            );
        }
        return $challenges;
    }

    public function add(string $title, string $language, string $messyCode, int $patternId, string $difficulty = 'beginner'): Challenge
    {
        $id = DB::table('challenges')->insertGetId([
            'title' => $title,
            'language' => $language,
            'messy_code' => $messyCode,
            'pattern_id' => $patternId,
            'difficulty' => $difficulty,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        $row = DB::table('challenges')
            ->join('patterns', 'challenges.pattern_id', '=', 'patterns.id')
            ->where('challenges.id', $id)
            ->select('challenges.id', 'challenges.pattern_id', 'challenges.title', 'challenges.language', 'challenges.messy_code', 'challenges.difficulty', 'patterns.name as pattern_name')
            ->first();
        return new Challenge(
            id: (int) $row->id,
            patternId: (int) $row->pattern_id,
            title: $row->title,
            language: $row->language,
            messyCode: $row->messy_code,
            expectedPattern: $row->pattern_name,
            difficulty: $row->difficulty,
        );
    }
}
