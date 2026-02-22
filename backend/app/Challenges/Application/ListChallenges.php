<?php

namespace App\Challenges\Application;

use App\Challenges\Domain\ChallengeRepository;

final class ListChallenges
{
    public function __construct(
        private ChallengeRepository $repository
    ) {
    }

    /**
     * @return list<ChallengeListItemDto>
     */
    public function handle(): array
    {
        $challenges = $this->repository->list();
        $dtos = [];
        foreach ($challenges as $challenge) {
            $dtos[] = new ChallengeListItemDto(
                id: $challenge->id,
                title: $challenge->title,
                expectedPattern: $challenge->expectedPattern,
                difficulty: $challenge->difficulty,
                language: $challenge->language,
            );
        }
        return $dtos;
    }
}
