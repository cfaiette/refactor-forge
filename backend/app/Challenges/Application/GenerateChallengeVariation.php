<?php

namespace App\Challenges\Application;

use App\Evaluation\Application\LlmClient;
use Illuminate\Support\Facades\Config;

final class GenerateChallengeVariation
{
    private const MAX_LINES = 100;
    private const THEMES = [
        'warehouse picking and shipping methods',
        'notification delivery channels',
        'file import parsers',
        'travel itinerary pricing rules',
        'game enemy AI behavior selection',
        'report export formatters',
        'promotion/discount engines',
        'document rendering modes',
        'ride dispatch assignment logic',
        'sensor alert escalation policies',
    ];
    private const BANNED_KEYWORDS = [
        'payment',
        'checkout',
        'credit card',
        'paypal',
        'billing',
        'invoice',
        'transaction',
    ];

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
        for ($attempt = 0; $attempt < 3; $attempt++) {
            $theme = self::THEMES[random_int(0, count(self::THEMES) - 1)];
            $variationToken = strtoupper(bin2hex(random_bytes(3)));
            $userPrompt = sprintf(
                'Generate one messy %s file that should be refactored to the "%s" pattern. Difficulty: %s. Theme: %s. Variation token: %s. Hard constraints: use the provided theme and do not use payment/checkout/billing domains. The code must look like a pre-refactor example (conditionals/duplicated branches allowed). Output only the code (no explanation).',
                $language,
                $patternName,
                $difficulty,
                $theme,
                $variationToken
            );

            $response = $this->llmClient->complete($systemPrompt, $userPrompt);
            if ($response === null || trim($response) === '') {
                continue;
            }

            $code = $this->extractCode($response);
            if ($code === null || !$this->passesThemeGuard($code)) {
                continue;
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

        return null;
    }

    private function extractCode(string $response): ?string
    {
        $trimmed = trim($response);
        if (preg_match('/```(?:\w+)?\s*\n(.*?)```/s', $trimmed, $m)) {
            return trim($m[1]);
        }
        return $trimmed;
    }

    private function passesThemeGuard(string $code): bool
    {
        $lower = strtolower($code);
        foreach (self::BANNED_KEYWORDS as $keyword) {
            if (str_contains($lower, $keyword)) {
                return false;
            }
        }
        return true;
    }
}
