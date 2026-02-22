<?php

namespace App\Attempts\Application;

final class SubmitRefactorAttemptDto
{
    public function __construct(
        public readonly float $score,
        public readonly string $feedback,
        public readonly ?string $aiCritique = null,
    ) {
    }

    public function toArray(): array
    {
        $data = [
            'score' => $this->score,
            'feedback' => $this->feedback,
        ];
        if ($this->aiCritique !== null) {
            $data['ai_critique'] = $this->aiCritique;
        }
        return $data;
    }
}
