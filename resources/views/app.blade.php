<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="index, follow">

        <title inertia>{{ config('app.name') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            rel="preload"
            as= "style" 
            href="https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap"
            onload="this.onload=null;this.rel='stylesheet'">

        <noscript>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap">
        </noscript>

        <!-- Vite -->
        @routes
        
        @viteReactRefresh

        @vite(['resources/css/app.css', 'resources/js/app.tsx',"resources/js/Pages/{$page['component']}.tsx"])

        <!-- Inertia -->
        @inertiaHead

    </head>
    <body class="bg-base font-mono antialiased">
        @inertia
    </body>
</html>