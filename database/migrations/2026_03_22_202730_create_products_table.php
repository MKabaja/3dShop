<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     *  Tabela przechowuje produkty, które mogą być zamawiane przez klientów.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            // PK
            $table->id();

            // Kolumny Biznesowe
            $table->string('name');
            $table->string('slug')->unique(); // nazwa produktu w URL
            $table->text('description')->nullable();
            $table->unsignedInteger('price')->default(0); // cena w groszach
            $table->unsignedInteger('stock')->nullable();
            $table->unsignedSmallInteger('production_days')->nullable();

            // Flagi
            $table->boolean('is_made_to_order')->default(false);
            $table->boolean('is_active')->default(true);

            // Soft Delete
            $table->softDeletes();

            $table->timestamps();

            // Indexy
            $table->index('is_active');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
