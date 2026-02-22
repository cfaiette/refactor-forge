<?php

namespace App\Challenges\Application;

final class ChallengeDto
{
    public function __construct(
        public readonly int $id,
        public readonly int $patternId,
        public readonly string $title,
        public readonly string $language,
        public readonly string $messyCode,
        public readonly string $expectedPattern,
        public readonly string $difficulty,
    ) {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'pattern_id' => $this->patternId,
            'title' => $this->title,
            'language' => $this->language,
            'messy_code' => $this->messyCode,
            'expected_pattern' => $this->expectedPattern,
            'difficulty' => $this->difficulty,
        ];
    }
}
