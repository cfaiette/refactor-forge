<?php

namespace App\Evaluation\Domain;

final class RuleCheck
{
    public function __construct(
        public readonly string $name,
        public readonly bool $passed,
        public readonly string $message,
    ) {
    }
}
