<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/status', function () {
    return response()->json(['status' => 'ok', 'service' => 'backend']);
});

Route::get('/challenges', [\App\Challenges\Presentation\ChallengesController::class, 'index']);
Route::post('/challenges', [\App\Challenges\Presentation\ChallengesController::class, 'store']);
Route::post('/challenges/generate', [\App\Challenges\Presentation\ChallengesController::class, 'generate']);
Route::get('/challenges/{id}', [\App\Challenges\Presentation\ChallengesController::class, 'show']);
Route::get('/patterns', [\App\Patterns\Presentation\PatternsController::class, 'index']);
Route::get('/patterns/{id}/reveal', [\App\Patterns\Presentation\PatternsController::class, 'reveal']);
Route::post('/attempts', [\App\Attempts\Presentation\AttemptsController::class, 'store']);

Route::get('/', function () {
    return response()->json([
        'message' => 'RefactorForge API',
        'endpoints' => [
            'GET /api/status',
            'GET /api/challenges',
            'POST /api/challenges',
            'GET /api/challenges/{id}',
            'POST /api/challenges/generate',
            'POST /api/attempts',
            'GET /api/patterns',
            'GET /api/patterns/{id}/reveal',
        ],
    ]);
});
