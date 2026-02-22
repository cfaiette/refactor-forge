<?php

namespace App\Patterns\Application;

use App\Patterns\Domain\PatternRepository;

final class RevealPattern
{
    public function __construct(
        private PatternRepository $repository
    ) {
    }

    public function handle(int $id): ?PatternRevealDto
    {
        $pattern = $this->repository->getById($id);
        if ($pattern === null) {
            return null;
        }
        return new PatternRevealDto(
            name: $pattern->name,
            intent: $pattern->intent,
            whenToUse: $pattern->whenToUse,
            exampleSolution: $pattern->exampleSolution,
        );
    }
}
