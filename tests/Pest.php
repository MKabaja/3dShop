<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/*
|--------------------------------------------------------------------------
| Test Case
|--------------------------------------------------------------------------
|
| Tutaj mówimy Pestowi, że wszystkie testy w folderze "Feature"
| mają dziedziczyć po klasie TestCase i używać RefreshDatabase.
| Dzięki temu $this->assertAuthenticated() zacznie "istnieć".
|
*/

uses(TestCase::class, RefreshDatabase::class)->in('Feature');

/**
 * Skróty do najczęstszych asercji na modelach
 */
function assertExists($model)
{
    test()->assertModelExists($model);
}

function assertMissing($model)
{
    test()->assertModelMissing($model);
}

function assertSoftDeleted($model)
{
    test()->assertModelSoftDeleted($model);
}

/*
|--------------------------------------------------------------------------
| Globalne helpery (opcjonalnie)
|--------------------------------------------------------------------------
*/

// Możesz tu zdefiniować funkcje, które ułatwią Ci życie, np.:
function loginAsAdmin()
{
    $admin = User::factory()->create(['role' => 'admin']);

    return test()->actingAs($admin);
}
