<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Horario;
use Illuminate\Database\Eloquent\Delete;

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

    public function edit($id){
        $horarios = Horario::find($id);
        if($horarios)
        {
            return response()->json([
                'status'=>200,
                'horario'=>$horarios
            ]);
        }
        else 
        {
            return respoonse()->json([
                'status'=>404,
                'message'=>'Horario no encontrado'
            ]);
        }
    }
    
    public function destroy($id)

    {

        $horarios = Horario::find($id);

        if($horarios){
            $horarios -> delete();
            return response()->json([
            'status'=>200,
            'message'=>'Horario eliminado correctamente'
        ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Horario no encontrado'
            ]);
        }
        

    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'hora'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else
        {

            $horarios = Horario::find($id);
            if($horario)
            {
                $horarios-> hora = $request->input('hora');
                $horarios->status = $request->input('status') == true ? '1':'0';
                $horarios->save();
                return response()->json([
                    'status'=>200,
                    'message'=>"Horario y clase del dia modificado correctamente"
                ]);              
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message'=>"Horario no encontrado"
                ]);  
            }
          
        }
    }
}
