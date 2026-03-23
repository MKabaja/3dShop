<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Dodajemy Kolumnę 'role' do Tabeli 'users',
     * która będzie określać, czy użytkownik jest administratorem czy klientem
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', ['admin', 'client'])
                ->default('client')
                ->after('password');
        });
    }

    /**
     * Usuwamy Kolumnę 'role' z Tabeli 'users'
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role');
        });
    }
};
