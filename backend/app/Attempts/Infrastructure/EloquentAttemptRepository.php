<?php

namespace App\Attempts\Infrastructure;

use App\Attempts\Domain\AttemptRepository;
use App\Attempts\Domain\RefactorAttempt;
use Illuminate\Support\Facades\DB;

final class EloquentAttemptRepository implements AttemptRepository
{
    public function store(int $challengeId, string $submittedCode, float $score, string $feedback): RefactorAttempt
    {
        $id = DB::table('refactor_attempts')->insertGetId([
            'challenge_id' => $challengeId,
            'submitted_code' => $submittedCode,
            'score' => $score,
            'feedback' => $feedback,
        ]);
        return new RefactorAttempt(
            id: (int) $id,
            challengeId: $challengeId,
            submittedCode: $submittedCode,
            score: $score,
            feedback: $feedback,
        );
    }
}
