<?php

namespace Tests\Unit\Evaluation;

use App\Evaluation\Domain\PhpStructure;
use App\Evaluation\Infrastructure\StrategyPatternRules;
use PHPUnit\Framework\TestCase;

class StrategyPatternRulesTest extends TestCase
{
    private StrategyPatternRules $rules;

    protected function setUp(): void
    {
        parent::setUp();
        $this->rules = new StrategyPatternRules();
    }

    public function test_evaluate_passes_when_all_strategy_conditions_met(): void
    {
        $structure = new PhpStructure(
            hasInterfaceOrAbstract: true,
            concreteClassCount: 2,
            hasLargeIfElseChain: false,
            contextDelegatesToAbstraction: true,
        );
        $checks = $this->rules->evaluate($structure);
        $this->assertCount(4, $checks);
        foreach ($checks as $check) {
            $this->assertTrue($check->passed, $check->message);
        }
    }

    public function test_evaluate_fails_when_large_if_else_present(): void
    {
        $structure = new PhpStructure(
            hasInterfaceOrAbstract: true,
            concreteClassCount: 2,
            hasLargeIfElseChain: true,
            contextDelegatesToAbstraction: true,
        );
        $checks = $this->rules->evaluate($structure);
        $failed = array_filter($checks, fn ($c) => !$c->passed);
        $this->assertNotEmpty($failed);
    }

    public function test_evaluate_fails_when_insufficient_concrete_classes(): void
    {
        $structure = new PhpStructure(
            hasInterfaceOrAbstract: true,
            concreteClassCount: 1,
            hasLargeIfElseChain: false,
            contextDelegatesToAbstraction: true,
        );
        $checks = $this->rules->evaluate($structure);
        $failed = array_filter($checks, fn ($c) => !$c->passed);
        $this->assertNotEmpty($failed);
    }
}
