<?php

namespace App\Patterns\Domain;

interface PatternRepository
{
    public function getById(int $id): ?Pattern;

    public function getByName(string $name): ?Pattern;

    /**
     * @return list<Pattern>
     */
    public function list(): array;
}
