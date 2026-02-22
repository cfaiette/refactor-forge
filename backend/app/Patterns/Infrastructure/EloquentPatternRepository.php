<?php

namespace App\Patterns\Infrastructure;

use App\Patterns\Domain\Pattern;
use App\Patterns\Domain\PatternRepository;
use Illuminate\Support\Facades\DB;

final class EloquentPatternRepository implements PatternRepository
{
    public function getById(int $id): ?Pattern
    {
        $row = DB::table('patterns')->where('id', $id)->first();
        if ($row === null) {
            return null;
        }
        $requirements = $row->structural_requirements !== null
            ? json_decode($row->structural_requirements, true)
            : null;
        return new Pattern(
            id: (int) $row->id,
            name: $row->name,
            intent: $row->intent,
            whenToUse: $row->when_to_use,
            structuralRequirements: $requirements,
            exampleSolution: $row->example_solution,
        );
    }

    public function getByName(string $name): ?Pattern
    {
        $row = DB::table('patterns')->where('name', $name)->first();
        if ($row === null) {
            return null;
        }
        return $this->getById((int) $row->id);
    }

    public function list(): array
    {
        $rows = DB::table('patterns')->orderBy('id')->get();
        $patterns = [];
        foreach ($rows as $row) {
            $requirements = $row->structural_requirements !== null
                ? json_decode($row->structural_requirements, true)
                : null;
            $patterns[] = new Pattern(
                id: (int) $row->id,
                name: $row->name,
                intent: $row->intent,
                whenToUse: $row->when_to_use,
                structuralRequirements: $requirements,
                exampleSolution: $row->example_solution,
            );
        }
        return $patterns;
    }
}
