<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     *  Tabela pośrednicząca między koszykiem a produktem,
     *  przechowuje informacje o ilości danego produktu w koszyku
     */
    public function up(): void
    {
        Schema::create('cart_items', function (Blueprint $table) {
            // PK
            $table->id();

            // Zależności do koszyka
            $table->foreignId('cart_id')
                ->constrained()
                ->cascadeOnDelete();

            // Zależności do produktu
            $table->foreignId('product_id')
                ->constrained()
                ->cascadeOnDelete();

            // Kolumny Biznesowe
            $table->unsignedInteger('quantity')->default(1);

            $table->unique(['cart_id', 'product_id']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_items');
    }
};
