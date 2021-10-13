<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Horario;


class HorarioController extends Controller
{
    public function hora(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'hora'=>'required',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else{
            $horarios = new Horario;
            $horarios->hora = $request->input('hora');
            $horarios->status = $request->input('status') == true ? '1':'0';
            $horarios->save();
            return response()->json([
                'status'=>200,
                'message'=>'Horario agregado correctamente',
            ]);
        }

       

    }
}
