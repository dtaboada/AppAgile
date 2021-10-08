<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ejercicios;

class EjerciciosController extends Controller
{
    public function wod(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'wod'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else
        {

            $ejercicios = new Ejercicios;
            $ejercicios-> wod = $request->input('wod');
            $ejercicios->status = $request->input('status') == true ? '1':'0';
            $ejercicios->save();
            return response()->json([
                'status'=>200,
                'status'=>"Ejercicio agregadoS"
            ]);
        }
    }
}
