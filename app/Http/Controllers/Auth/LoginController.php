<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/Login');
    }

    public function store(LoginRequest $request): RedirectResponse
    {
        $credentials = $request->only('email', 'password');

        $loginSuccessful = Auth::attempt($credentials,
            $request->boolean('remember'));

        if (! $loginSuccessful) {
            return back()->withErrors([
                'email' => 'Nie prawidłowe dane logowania.',
            ]);
        }

        $request->session()->regenerate();  // Zapobiega atakom typu session fixation

        // CartService::mergeGuestCart(
        //         user: Auth::user(),
        //         cartItems: $request->cart_items ?? []
        //     )

        return redirect()->intended('/');
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
