<?php

namespace App\Providers;

use App\Attempts\Domain\AttemptRepository;
use App\Attempts\Infrastructure\EloquentAttemptRepository;
use App\Challenges\Domain\ChallengeRepository;
use App\Challenges\Infrastructure\EloquentChallengeRepository;
use App\Evaluation\Application\CodeEvaluator;
use App\Evaluation\Application\EvaluateCode;
use App\Evaluation\Application\LlmClient;
use App\Evaluation\Infrastructure\NullLlmClient;
use App\Evaluation\Infrastructure\OllamaLlmClient;
use App\Patterns\Domain\PatternRepository;
use App\Patterns\Infrastructure\EloquentPatternRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(ChallengeRepository::class, EloquentChallengeRepository::class);
        $this->app->bind(PatternRepository::class, EloquentPatternRepository::class);
        $this->app->bind(AttemptRepository::class, EloquentAttemptRepository::class);
        $this->app->bind(CodeEvaluator::class, EvaluateCode::class);

        $this->app->bind(LlmClient::class, function () {
            if (!config('llm.enabled') || !config('llm.url')) {
                return new NullLlmClient();
            }
            return new OllamaLlmClient(
                config('llm.url'),
                config('llm.model'),
                config('llm.timeout'),
            );
        });
    }

    public function boot(): void
    {
        //
    }
}
