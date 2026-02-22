<?php

namespace App\Evaluation\Infrastructure;

use App\Evaluation\Application\LlmClient;
use Illuminate\Support\Facades\Http;

final class OllamaLlmClient implements LlmClient
{
    public function __construct(
        private string $url,
        private string $model,
        private int $timeout,
    ) {
    }

    public function complete(string $systemPrompt, string $userPrompt): ?string
    {
        $prompt = trim($systemPrompt . "\n\n" . $userPrompt);
        $endpoint = rtrim($this->url, '/') . '/api/generate';

        try {
            $response = Http::timeout($this->timeout)
                ->post($endpoint, [
                    'model' => $this->model,
                    'prompt' => $prompt,
                    'stream' => false,
                ]);

            if (!$response->successful()) {
                return null;
            }

            $body = $response->json();
            return $body['response'] ?? null;
        } catch (\Throwable) {
            return null;
        }
    }
}
