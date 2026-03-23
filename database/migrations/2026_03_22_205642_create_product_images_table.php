<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Tabela przechowuje obrazy produktów.
     */
    public function up(): void
    {
        Schema::create('product_images', function (Blueprint $table) {
            // PK
            $table->id();

            // Zależnosci od produktu
            $table->foreignId('product_id')
                ->constrained()
                ->cascadeOnDelete();

            // Kolumny Biznesowe
            $table->string('path');
            $table->string('alt_text')->nullable();

            // Flagi
            $table->boolean('is_primary')->default(false);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_images');
    }
};
