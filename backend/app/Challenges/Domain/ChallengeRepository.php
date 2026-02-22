<?php

namespace App\Challenges\Domain;

interface ChallengeRepository
{
    public function getById(int $id): ?Challenge;

    /**
     * @return list<Challenge>
     */
    public function list(): array;

    public function add(string $title, string $language, string $messyCode, int $patternId, string $difficulty = 'beginner'): Challenge;
}
