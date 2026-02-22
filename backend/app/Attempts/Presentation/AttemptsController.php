<?php

namespace App\Attempts\Presentation;

use App\Attempts\Application\SubmitRefactorAttempt;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

final class AttemptsController extends Controller
{
    public function store(Request $request, SubmitRefactorAttempt $submitAttempt): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'challenge_id' => 'required|integer',
            'submitted_code' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }
        $challengeId = (int) $request->input('challenge_id');
        $submittedCode = $request->input('submitted_code');

        try {
            $dto = $submitAttempt->handle($challengeId, $submittedCode);
            return response()->json($dto->toArray());
        } catch (\InvalidArgumentException $e) {
            return response()->json(['message' => $e->getMessage()], 404);
        }
    }
}
