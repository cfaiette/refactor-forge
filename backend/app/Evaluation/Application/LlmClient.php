<?php

namespace App\Evaluation\Application;

interface LlmClient
{
    public function complete(string $systemPrompt, string $userPrompt): ?string;
}
