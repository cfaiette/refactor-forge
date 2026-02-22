<?php

namespace App\Patterns\Application;

final class PatternRevealDto
{
    public function __construct(
        public readonly string $name,
        public readonly string $intent,
        public readonly string $whenToUse,
        public readonly string $exampleSolution,
    ) {
    }

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'intent' => $this->intent,
            'when_to_use' => $this->whenToUse,
            'example_solution' => $this->exampleSolution,
        ];
    }
}
