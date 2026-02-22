<?php

namespace App\Attempts\Domain;

final class RefactorAttempt
{
    public function __construct(
        public readonly int $id,
        public readonly int $challengeId,
        public readonly string $submittedCode,
        public readonly float $score,
        public readonly string $feedback,
    ) {
    }
}
