<?php

namespace App\Challenges\Application;

final class ChallengeListItemDto
{
    public function __construct(
        public readonly int $id,
        public readonly string $title,
        public readonly string $expectedPattern,
        public readonly string $difficulty,
        public readonly string $language,
    ) {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'expected_pattern' => $this->expectedPattern,
            'difficulty' => $this->difficulty,
            'language' => $this->language,
        ];
    }
}
