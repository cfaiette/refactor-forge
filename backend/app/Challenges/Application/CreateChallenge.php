<?php

namespace App\Challenges\Application;

use App\Challenges\Domain\ChallengeRepository;
use App\Patterns\Domain\PatternRepository;

final class CreateChallenge
{
    private const DEFAULT_MESSY_CODE = "<?php\nfunction process(string \$type): float {\n    if (\$type === 'a') return 1.0;\n    if (\$type === 'b') return 2.0;\n    if (\$type === 'c') return 3.0;\n    return 0.0;\n}\n";

    public function __construct(
        private ChallengeRepository $challengeRepository,
        private PatternRepository $patternRepository,
    ) {
    }

    public function handle(int $patternId): ?ChallengeDto
    {
        $pattern = $this->patternRepository->getById($patternId);
        if ($pattern === null) {
            return null;
        }
        $title = 'Refactor to ' . ucfirst(str_replace('_', ' ', $pattern->name));
        $challenge = $this->challengeRepository->add(
            $title,
            'php',
            self::DEFAULT_MESSY_CODE,
            $patternId,
            'beginner',
        );
        return new ChallengeDto(
            id: $challenge->id,
            patternId: $challenge->patternId,
            title: $challenge->title,
            language: $challenge->language,
            messyCode: $challenge->messyCode,
            expectedPattern: $challenge->expectedPattern,
            difficulty: $challenge->difficulty,
        );
    }
}
