<?php

namespace App\Attempts\Domain;

interface AttemptRepository
{
    public function store(int $challengeId, string $submittedCode, float $score, string $feedback): RefactorAttempt;
}
