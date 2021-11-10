<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\EjerciciosController;
use App\Http\Controllers\API\HorarioController;
use App\Http\Controllers\API\FrontendController;
use App\Http\Controllers\API\AsistController;
use App\Http\Controllers\API\BeneficioController;
use Illuminate\Database\Eloquent\Delete;


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('getEjercicios', [FrontendController::class, 'ejercicios']);
Route::get('getHorarios', [FrontendController::class, 'horarios']);
Route::get('getBeneficios', [FrontendController::class, 'beneficios']);


Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function () {

    Route::get('/checkingAuthenticated', function(){
        return response()->json(["message"=>"You are in","status"=>200],200);
    });
    
    Route::post('hour',[HorarioController::class, 'hora']);
    Route::post('wod-dashboard',[EjerciciosController::class, 'wod']);
    Route::get('edit-ejercicios/{id}', [EjerciciosController::class, 'edit']);
    Route::put('update-ejercicios/{id}',[EjerciciosController::class, 'update']);

    Route::delete('delete-ejercicios/{id}',[EjerciciosController::class, 'destroy']);
    Route::get('edit-horarios/{id}', [HorarioController::class, 'edit']);
    Route::put('update-horarios/{id}',[HorarioController::class, 'update']);

    Route::delete('delete-horarios/{id}',[HorarioController::class, 'destroy']);

    Route::get('edit-beneficio/{id}', [BeneficioController::class, 'edit']);
    Route::post('beneficio',[BeneficioController::class, 'beneficio']);
    Route::put('update-beneficio/{id}',[BeneficioController::class, 'update']);
    Route::delete('delete-beneficio/{id}',[BeneficioController::class, 'destroy']);

});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('user-horarios', [FrontendController::class, 'GetUserHorarioByHorarioId']);
    Route::post('asistir', [AsistController::class, 'asistir']);
    Route::post('logout', [AuthController::class, 'logout']);
});



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
