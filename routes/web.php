<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/login', [LoginController::class, 'view'])->name("login");
Route::post('/login', [LoginController::class, 'store']);
Route::get('/register', [RegisterController::class, 'view'])->name("register");
Route::post('/register', [RegisterController::class, 'store']);
Route::get('/logout', [LogoutController::class, 'store']);

Route::middleware("auth")->group(function (){
    Route::get('/', fn () => inertia('index'))->name("home");
    Route::get('/wishlist', fn () => inertia('wishlist'));
    Route::get('/accounts', fn () => inertia('accounts'));
    Route::get('/transactions/income', fn () => inertia('transactions'));
    Route::get('/transactions/expense', fn () => inertia('transactions'));
    Route::get('/transactions/loan', fn () => inertia('transactions'));
    Route::get('/transactions/deposit', fn () => inertia('transactions'));
    Route::get('/settings', fn () => inertia('settings'));
    Route::get('/settings/profile', fn () => inertia('settings'));
    Route::get('/settings/account', fn () => inertia('settings'));
    Route::get('/settings/activity', fn () => inertia('settings'));
});
