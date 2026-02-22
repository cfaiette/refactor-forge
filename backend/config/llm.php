<?php

return [
    'url' => env('LLM_URL', 'http://ollama:11434'),
    'model' => env('LLM_MODEL', 'deepseek-coder-v2-lite-base-q4_k_m'),
    'enabled' => env('LLM_ENABLED', true),
    'timeout' => (int) env('LLM_TIMEOUT', 120),
    'enable_critique' => env('LLM_CRITIQUE_ENABLED', true),
    'enable_challenge_generation' => env('LLM_CHALLENGE_GENERATION_ENABLED', true),
];
