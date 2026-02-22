<?php

namespace App\Challenges\Application;

use App\Challenges\Domain\ChallengeRepository;

final class GetChallenge
{
    public function __construct(
        private ChallengeRepository $repository
    ) {
    }

    public function handle(int $id): ?ChallengeDto
    {
        $challenge = $this->repository->getById($id);
        if ($challenge === null) {
            return null;
        }
        return new ChallengeDto(
            id: $challenge->id,
            patternId: $challenge->patternId,
            title: $challenge->title,
            language: $challenge->language,
            messyCode: $challenge->messyCode,
            expectedPattern: $challenge->expectedPattern,
            difficulty: $challenge->difficulty,
        );
    }
}
