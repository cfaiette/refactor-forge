<?php

namespace App\Challenges\Application;

final class GenerateChallengeVariationDto
{
    public function __construct(
        public readonly string $title,
        public readonly string $messyCode,
        public readonly string $language,
        public readonly string $patternName,
    ) {
    }

    public function toArray(): array
    {
        return [
            'title' => $this->title,
            'messy_code' => $this->messyCode,
            'language' => $this->language,
            'pattern_name' => $this->patternName,
        ];
    }
}
