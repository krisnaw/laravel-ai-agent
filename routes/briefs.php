<?php

use App\Http\Controllers\Brief\BriefController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('briefs', [BriefController::class, 'index'])->name('brief.index');
});
