<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('patterns', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->text('intent');
            $table->text('when_to_use');
            $table->json('structural_requirements')->nullable();
            $table->text('example_solution');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('patterns');
    }
};
