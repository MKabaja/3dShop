<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Tabela przechowuje adresy użytkowników,
     * które mogą być używane do wysyłki zamówień.
     */
    public function up(): void
    {
        Schema::create('user_addresses', function (Blueprint $table) {
            // PK
            $table->id();

            // Zależnosci od użytkownika
            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();
            // Kolumny Biznesowe
            $table->string('label');
            $table->string('street');
            $table->string('city');
            $table->string('postal_code', 10);

            // Flagi
            $table->boolean('is_default')->default(false);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_addresses');
    }
};
