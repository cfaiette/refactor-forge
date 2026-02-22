<?php

namespace App\Console\Commands;

use App\Challenges\Application\GenerateChallengeVariation;
use App\Patterns\Domain\PatternRepository;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class GenerateChallengeCommand extends Command
{
    protected $signature = 'challenges:generate
                            {--pattern=strategy : Pattern name (e.g. strategy, factory)}
                            {--language=php : Language (php or typescript)}
                            {--difficulty=beginner : Difficulty level}
                            {--save : Persist the generated challenge to the database}';

    protected $description = 'Generate a challenge variation using the LLM (DeepSeek-Coder-V2 Lite)';

    public function handle(GenerateChallengeVariation $generateVariation, PatternRepository $patternRepository): int
    {
        $patternName = $this->option('pattern');
        $language = $this->option('language');
        $difficulty = $this->option('difficulty');

        $this->info("Generating challenge: pattern={$patternName}, language={$language}, difficulty={$difficulty}");

        $dto = $generateVariation->handle($patternName, $language, $difficulty);
        if ($dto === null) {
            $this->error('Generation failed or LLM challenge generation is disabled.');
            return self::FAILURE;
        }

        $this->line('Title: ' . $dto->title);
        $this->line('Pattern: ' . $dto->patternName);
        $this->line('Language: ' . $dto->language);
        $this->newLine();
        $this->line('Generated code (first 20 lines):');
        $this->line(implode("\n", array_slice(explode("\n", $dto->messyCode), 0, 20)));

        if ($this->option('save')) {
            $pattern = $patternRepository->getByName($dto->patternName);
            if ($pattern === null) {
                $this->error("Pattern '{$dto->patternName}' not found. Create it first or use an existing pattern name.");
                return self::FAILURE;
            }
            DB::table('challenges')->insert([
                'title' => $dto->title,
                'language' => $dto->language,
                'messy_code' => $dto->messyCode,
                'pattern_id' => $pattern->id,
                'difficulty' => $difficulty,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            $this->info('Challenge saved to database.');
        }

        return self::SUCCESS;
    }
}
