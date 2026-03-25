<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

// Gość

Route::middleware('guest')->group(function () {

    Route::controller(LoginController::class)
        ->group(function () {
            Route::get('/login', 'create')->name('login');
            Route::post('/login', 'store')->name('login.store');
        });

    Route::controller(RegisterController::class)
        ->group(function () {
            Route::get('/register', 'create')->name('register');
            Route::post('/register', 'store')->name('register.store');
        });
});

// Zalogowany

Route::middleware('auth')->group(function () {

    Route::controller(LoginController::class)
        ->group(function () {
            Route::post('/logout', 'destroy')->name('logout');
        });
});

// Strona główna (dostępna dla wszystkich)

Route::inertia('/', 'Landing');
