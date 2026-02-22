<?php

namespace App\Challenges\Domain;

final class Challenge
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
}
