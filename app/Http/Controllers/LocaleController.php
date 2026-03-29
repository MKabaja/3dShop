<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class LocaleController extends Controller
{
    private const SUPPORTED = ['en', 'pl'];

    public function switch(Request $request): RedirectResponse
    {
        $locale = $request->input('locale');

        if (in_array($locale, self::SUPPORTED, true)) {
            Session::put('locale', $locale);
        }

        return back();
    }
}
