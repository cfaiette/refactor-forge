<?php

namespace App\Evaluation\Infrastructure;

use App\Evaluation\Domain\PhpStructure;
use App\Evaluation\Domain\RuleCheck;

final class StrategyPatternRules
{
    /**
     * @return RuleCheck[]
     */
    public function evaluate(PhpStructure $structure): array
    {
        return [
            new RuleCheck(
                'no_large_if_else_chain',
                !$structure->hasLargeIfElseChain,
                $structure->hasLargeIfElseChain ? 'Code still has a large if/else chain on the same discriminator.' : 'No large if/else chain detected.'
            ),
            new RuleCheck(
                'has_interface_or_abstract',
                $structure->hasInterfaceOrAbstract,
                $structure->hasInterfaceOrAbstract ? 'Interface or abstract class present.' : 'Missing interface or abstract class.'
            ),
            new RuleCheck(
                'at_least_two_concrete_implementations',
                $structure->concreteClassCount >= 2,
                $structure->concreteClassCount >= 2
                    ? 'At least 2 concrete implementations found.'
                    : 'Need at least 2 concrete implementations (found ' . $structure->concreteClassCount . ').'
            ),
            new RuleCheck(
                'context_delegates_to_abstraction',
                $structure->contextDelegatesToAbstraction,
                $structure->contextDelegatesToAbstraction ? 'Context delegates to abstraction.' : 'Context should delegate to the strategy abstraction.'
            ),
        ];
    }
}
