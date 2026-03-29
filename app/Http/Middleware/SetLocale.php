<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class SetLocale
{
    private const SUPPORTED = ['en', 'pl'];

    private const DEFAULT = 'en';

    public function handle(Request $request, Closure $next): mixed
    {

        $locale = Session::get('locale');

        if (! $locale) {
            $preferred = $request->getPreferredLanguage(self::SUPPORTED);
            $locale = $preferred ?? self::DEFAULT;
        }

        if (! in_array($locale, self::SUPPORTED, true)) {
            $locale = self::DEFAULT;
        }

        App::setLocale($locale);

        return $next($request);
    }
}
