<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/status', function () {
    return response()->json(['status' => 'ok', 'service' => 'backend']);
});

Route::get('/', function () {
    return response()->json([
        'message' => 'RefactorForge API',
        'endpoints' => [
            'GET /api/status',
            'GET /api/challenges/{id}',
            'POST /api/attempts',
            'GET /api/patterns/{id}/reveal',
        ],
    ]);
});
