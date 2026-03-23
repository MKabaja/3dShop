<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Tabela przechowuje informacje o zamówieniach,
     * które zostały złożone przez klientów.
     * Adres wysyłki jest przechowywany jako JSON, aby zachować jego niezmienność po złożeniu zamówienia.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            // PK
            $table->id();

            $table->string('order_number')
                ->unique()
                ->nullable();

            // Zależności do użytkownika
            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();
            // Kolumny Biznesowe
            $table->enum('status', ['pending', 'processing', 'shipped', 'delivered', 'cancelled'])
                ->default('pending');

            $table->unsignedInteger('total')->default(0);

            $table->json('shipping_address'); // Niezmienne po złożeniu zamówienia

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
