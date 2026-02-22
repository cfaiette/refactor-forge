<?php

namespace App\Patterns\Domain;

final class Pattern
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly string $intent,
        public readonly string $whenToUse,
        public readonly ?array $structuralRequirements,
        public readonly string $exampleSolution,
    ) {
    }
}
