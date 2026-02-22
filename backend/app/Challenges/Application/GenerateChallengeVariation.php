<?php

namespace App\Challenges\Application;

use App\Evaluation\Application\LlmClient;
use Illuminate\Support\Facades\Config;

final class GenerateChallengeVariation
{
    private const MAX_LINES = 100;

    public function __construct(
        private LlmClient $llmClient,
    ) {
    }

    public function handle(string $patternName, string $language = 'php', string $difficulty = 'beginner'): ?GenerateChallengeVariationDto
    {
        if (!Config::get('llm.enable_challenge_generation', false)) {
            return null;
        }

        $systemPrompt = 'You are a refactoring exercise generator. Produce a single small code file (at most ' . self::MAX_LINES . ' lines) that is intentionally messy and should be refactored to apply a design pattern. Output only the code, or the code inside a single markdown code block. Do not include the solution or explanation.';
        $userPrompt = sprintf(
            'Generate one messy %s file that should be refactored to the "%s" pattern. Difficulty: %s. Output only the code (no explanation).',
            $language,
            $patternName,
            $difficulty
        );

        $response = $this->llmClient->complete($systemPrompt, $userPrompt);
        if ($response === null || trim($response) === '') {
            return null;
        }

        $code = $this->extractCode($response);
        if ($code === null) {
            return null;
        }

        $lines = explode("\n", $code);
        if (count($lines) > self::MAX_LINES) {
            $code = implode("\n", array_slice($lines, 0, self::MAX_LINES));
        }

        $title = sprintf('Refactor to %s', ucfirst(str_replace('_', ' ', $patternName)));

        return new GenerateChallengeVariationDto(
            title: $title,
            messyCode: $code,
            language: $language,
            patternName: $patternName,
        );
    }

    private function extractCode(string $response): ?string
    {
        $trimmed = trim($response);
        if (preg_match('/```(?:\w+)?\s*\n(.*?)```/s', $trimmed, $m)) {
            return trim($m[1]);
        }
        return $trimmed;
    }
}
