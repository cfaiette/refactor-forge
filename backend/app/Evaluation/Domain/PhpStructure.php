<?php

namespace App\Evaluation\Domain;

final class PhpStructure
{
    public function __construct(
        public readonly bool $hasInterfaceOrAbstract,
        public readonly int $concreteClassCount,
        public readonly bool $hasLargeIfElseChain,
        public readonly bool $contextDelegatesToAbstraction,
    ) {
    }
}
