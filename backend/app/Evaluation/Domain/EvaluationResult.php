<?php

namespace App\Evaluation\Domain;

final class EvaluationResult
{
    public function __construct(
        public readonly float $score,
        public readonly string $feedback,
    ) {
    }
}
