<?php

use Illuminate\Support\Facades\Route;

// Main portfolio page
Route::get('/', function () {
    return view('welcome');
});

// Catch-all for React Router (SPA) — serves the same blade view for any path
// so that direct browser navigation to /projects/sigasi works correctly.
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
