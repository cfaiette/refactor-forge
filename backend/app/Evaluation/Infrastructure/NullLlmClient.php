<?php

namespace App\Evaluation\Infrastructure;

use App\Evaluation\Application\LlmClient;

final class NullLlmClient implements LlmClient
{
    public function complete(string $systemPrompt, string $userPrompt): ?string
    {
        return null;
    }
}
