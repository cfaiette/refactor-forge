<?php

namespace App\Attempts\Application;

use App\Attempts\Domain\AttemptRepository;
use App\Challenges\Domain\ChallengeRepository;
use App\Evaluation\Application\CodeEvaluator;
use App\Evaluation\Application\LlmClient;
use Illuminate\Support\Facades\Config;

final class SubmitRefactorAttempt
{
    public function __construct(
        private ChallengeRepository $challengeRepository,
        private CodeEvaluator $codeEvaluator,
        private AttemptRepository $attemptRepository,
        private LlmClient $llmClient,
    ) {
    }

    public function handle(int $challengeId, string $submittedCode): SubmitRefactorAttemptDto
    {
        $challenge = $this->challengeRepository->getById($challengeId);
        if ($challenge === null) {
            throw new \InvalidArgumentException('Challenge not found.');
        }

        $result = $this->codeEvaluator->evaluate(
            $challenge->language,
            $submittedCode,
            $challenge->expectedPattern
        );

        $this->attemptRepository->store(
            $challengeId,
            $submittedCode,
            $result->score,
            $result->feedback
        );

        $aiCritique = null;
        if (Config::get('llm.enable_critique', false)) {
            $aiCritique = $this->requestCritique($challenge->title, $challenge->expectedPattern, $submittedCode, $result->score, $result->feedback);
        }

        return new SubmitRefactorAttemptDto(
            score: $result->score,
            feedback: $result->feedback,
            aiCritique: $aiCritique
        );
    }

    private function requestCritique(string $challengeTitle, string $expectedPattern, string $submittedCode, float $score, string $structuralFeedback): ?string
    {
        $systemPrompt = 'You are a code review assistant. Give a short critique (at most 200 words) focusing on: cohesion, naming clarity, SOLID principles, and one or two concrete suggestions. Do not contradict or override the structural score; the deterministic score is authoritative.';
        $userPrompt = sprintf(
            "Challenge: %s. Expected pattern: %s.\n\nStructural score (authoritative): %.1f\nStructural feedback: %s\n\nSubmitted code:\n%s\n\nProvide a brief AI critique.",
            $challengeTitle,
            $expectedPattern,
            $score,
            $structuralFeedback,
            $submittedCode
        );
        return $this->llmClient->complete($systemPrompt, $userPrompt);
    }
}
