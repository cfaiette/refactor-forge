<?php

namespace App\Patterns\Application;

use App\Patterns\Domain\PatternRepository;

final class ListPatterns
{
    public function __construct(
        private PatternRepository $repository
    ) {
    }

    /**
     * @return list<PatternListItemDto>
     */
    public function handle(): array
    {
        $patterns = $this->repository->list();
        $dtos = [];
        foreach ($patterns as $pattern) {
            $dtos[] = new PatternListItemDto(
                id: $pattern->id,
                name: $pattern->name,
            );
        }
        return $dtos;
    }
}
