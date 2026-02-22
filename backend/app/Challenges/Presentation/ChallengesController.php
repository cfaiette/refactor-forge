<?php

namespace App\Challenges\Presentation;

use App\Challenges\Application\CreateChallenge;
use App\Challenges\Application\GenerateChallengeVariation;
use App\Challenges\Application\GetChallenge;
use App\Challenges\Application\ListChallenges;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

final class ChallengesController extends Controller
{
    public function index(ListChallenges $listChallenges): JsonResponse
    {
        $dtos = $listChallenges->handle();
        return response()->json(array_map(fn ($dto) => $dto->toArray(), $dtos));
    }

    public function store(Request $request, CreateChallenge $createChallenge): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'pattern_id' => 'required|integer|exists:patterns,id',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }
        $dto = $createChallenge->handle((int) $request->input('pattern_id'));
        if ($dto === null) {
            return response()->json(['message' => 'Pattern not found'], 404);
        }
        return response()->json($dto->toArray(), 201);
    }

    public function show(int $id, GetChallenge $getChallenge): JsonResponse
    {
        $dto = $getChallenge->handle($id);
        if ($dto === null) {
            return response()->json(['message' => 'Challenge not found'], 404);
        }
        return response()->json($dto->toArray());
    }

    public function generate(Request $request, GenerateChallengeVariation $generateVariation): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'pattern_name' => 'required|string|max:100',
            'language' => 'sometimes|string|in:php,typescript',
            'difficulty' => 'sometimes|string|in:beginner,intermediate,advanced',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }
        $patternName = $request->input('pattern_name');
        $language = $request->input('language', 'php');
        $difficulty = $request->input('difficulty', 'beginner');

        $dto = $generateVariation->handle($patternName, $language, $difficulty);
        if ($dto === null) {
            return response()->json(['message' => 'Challenge generation failed or is disabled.'], 503);
        }
        return response()->json($dto->toArray());
    }
}
