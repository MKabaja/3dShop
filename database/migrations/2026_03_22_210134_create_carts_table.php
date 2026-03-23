<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Tabela przechowuje koszyki zakupowe,
     * Użytkownik może mieć jeden aktywny koszyk.
     */
    public function up(): void
    {
        Schema::create('carts', function (Blueprint $table) {
            // PK
            $table->id();
            // Zależności do użytkownika
            $table->foreignId('user_id')
                ->nullable()
                ->constrained()
                ->cascadeOnDelete();

            $table->string('session_id')->unique()->nullable(); // dla gości

            $table->unique('user_id');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
