<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ejercicios;
use App\Models\Horario;


class FrontendController extends Controller
{
    public function ejercicios()
    {
        $ejercicios = Ejercicios::where('status','0')->get();
        return response()->json([
            'status'=>200,
            'ejercicios'=>$ejercicios,
        ]);
    }
    public function horarios()
    {
        $horarios = Horario::where('status','0')->get();
        return response()->json([
            'status'=>200,
            'horarios'=>$horarios,
        ]);
    }
}
