<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\EjerciciosController;
use App\Http\Controllers\API\HorarioController;
use App\Http\Controllers\API\FrontendController;



Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('getEjercicios', [FrontendController::class, 'ejercicios']);
Route::get('getHorarios', [FrontendController::class, 'horarios']);


Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function () {

    Route::get('/checkingAuthenticated', function(){
        return response()->json(["message"=>"You are in","status"=>200],200);
    });
    
    Route::post('hour',[HorarioController::class, 'hora']);
    Route::post('wod-dashboard',[EjerciciosController::class, 'wod']);
    

});

Route::middleware(['auth:sanctum'])->group(function () {
    
    Route::post('logout', [AuthController::class, 'logout']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
