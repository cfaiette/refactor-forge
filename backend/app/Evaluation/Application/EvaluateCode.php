<?php

namespace App\Evaluation\Application;

use App\Evaluation\Domain\EvaluationResult;
use App\Evaluation\Domain\PhpStructure;
use App\Evaluation\Infrastructure\PhpAstParser;
use App\Evaluation\Infrastructure\StrategyPatternRules;

final class EvaluateCode implements CodeEvaluator
{
    public function __construct(
        private PhpAstParser $phpParser,
        private StrategyPatternRules $strategyRules,
    ) {
    }

    public function evaluate(string $language, string $submittedCode, string $expectedPattern): EvaluationResult
    {
        if ($language !== 'php') {
            return new EvaluationResult(
                score: 0.0,
                feedback: 'TypeScript evaluation coming soon.'
            );
        }

        $structure = $this->phpParser->parse($submittedCode);
        if ($structure === null) {
            return new EvaluationResult(
                score: 0.0,
                feedback: 'Could not parse the submitted PHP code. Check syntax.'
            );
        }

        $patternName = strtolower($expectedPattern);
        if ($patternName !== 'strategy') {
            return new EvaluationResult(
                score: 0.0,
                feedback: 'Evaluation for pattern "' . $expectedPattern . '" is not implemented yet. Only Strategy is supported in MVP.'
            );
        }

        $checks = $this->strategyRules->evaluate($structure);
        $passed = 0;
        $messages = [];
        foreach ($checks as $check) {
            if ($check->passed) {
                $passed++;
            }
            $messages[] = $check->message;
        }
        $total = count($checks);
        $structuralScore = $total > 0 ? ($passed / $total) * 70.0 : 0.0;
        $patternScore = $total > 0 ? ($passed / $total) * 20.0 : 0.0;
        $clarityScore = $total > 0 ? ($passed / $total) * 10.0 : 0.0;
        $score = round($structuralScore + $patternScore + $clarityScore, 2);
        $feedback = implode("\n", $messages);

        return new EvaluationResult(score: min(100.0, $score), feedback: $feedback);
    }
}
