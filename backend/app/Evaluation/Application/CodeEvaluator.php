<?php

namespace App\Evaluation\Application;

use App\Evaluation\Domain\EvaluationResult;

interface CodeEvaluator
{
    public function evaluate(string $language, string $submittedCode, string $expectedPattern): EvaluationResult;
}
