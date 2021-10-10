<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ejercicios;
use Illuminate\Support\Facades\Validator;

class HorariosController extends Controller
{
    public function clase(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'clase'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else
        {

            $horarios = new Horario;
            $horarios-> wod = $request->input('clase');
            $horarios->status = $request->input('status') == true ? '1':'0';
            $horarios->save();
            return response()->json([
                'status'=>200,
                'message'=>"Clase agragada agregada correctamente"
            ]);
        }
    }
}
