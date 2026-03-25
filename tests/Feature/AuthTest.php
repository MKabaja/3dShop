<?php

use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\post;

// Rejestracja – happy path
it('registers a new user and logs them in', function () {

    $data = [
        'name' => 'Jan Kowalski',
        'email' => 'jan@example.com',
        'password' => 'TrudneHaslo!@#2026',
        'password_confirmation' => 'TrudneHaslo!@#2026',
    ];

    $response = post('/register', $data);

    $response->assertRedirect('/');
    expect(Auth::check())->toBeTrue();
    assertDatabaseHas('users', ['email' => 'jan@example.com']);
});

// Rejestracja – email zajęty
it('fails registration with duplicate email', function () {
    User::factory()->create(['email' => 'jan@example.com']);

    $response = post('/register', [
        'name' => 'Jan',
        'email' => 'jan@example.com',
        'password' => 'MojeTajneHaslo2026!',
        'password_confirmation' => 'MojeTajneHaslo2026!',
    ]);

    $response->assertSessionHasErrors('email');
    expect(Auth::guest())->toBeTrue();
});

// Logowanie – happy path
it('logs in with valid credentials', function () {
    $user = User::factory()->create();

    $response = post('/login', [
        'email' => $user->email,
        'password' => 'MojeTajneHaslo2026!', // z fabryki
    ]);

    $response->assertRedirect('/');
    expect(Auth::user()->id === $user->id)->toBeTrue();
});

// Logowanie – złe hasło
it('fails login with invalid password', function () {
    $user = User::factory()->create();

    $response = post('/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    $response->assertSessionHasErrors('email');
    expect(Auth::guest())->toBeTrue();
});

// Middleware admin
// it('blocks non-admin from admin routes', function () {
//      $this->withoutExceptionHandling();

//     $client = User::factory()->create();

//     $response = actingAs($client)->get('/admin/dashboard');
//     $response->assertStatus(403);
// });

// Wylogowanie
it('logs out authenticated user', function () {
    /** @var Authenticatable $user */
    $user = User::factory()->create();

    actingAs($user)->post('/logout');
    expect(Auth::guest())->toBeTrue();
});
