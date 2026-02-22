<?php

namespace App\Patterns\Presentation;

use App\Patterns\Application\ListPatterns;
use App\Patterns\Application\RevealPattern;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

final class PatternsController extends Controller
{
    public function index(ListPatterns $listPatterns): JsonResponse
    {
        $dtos = $listPatterns->handle();
        return response()->json(array_map(fn ($dto) => $dto->toArray(), $dtos));
    }

    public function reveal(int $id, RevealPattern $revealPattern): JsonResponse
    {
        $dto = $revealPattern->handle($id);
        if ($dto === null) {
            return response()->json(['message' => 'Pattern not found'], 404);
        }
        return response()->json($dto->toArray());
    }
}
