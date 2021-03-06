<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ejercicios;
use Illuminate\Support\Facades\Validator;

use Illuminate\Database\Eloquent\Delete;

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
                'message'=>"Planificacion del dia agregada correctamente"
            ]);
        }
        // if(auth('sanctum')->check()){
        //     return response()->json([
        //         'status'=>201,
        //         'message'=>"i am",
        //     ]);

        // }else{
        //     return response()->json([
        //         'status'=>401,
        //         'message'=>"Logueate",
        //     ]);
        // }
    }

    public function edit($id){
        $ejercicio = Ejercicios::find($id);
        if($ejercicio)
        {
            return response()->json([
                'status'=>200,
                'ejercicio'=>$ejercicio
            ]);
        }
        else 
        {
            return respoonse()->json([
                'status'=>404,
                'message'=>'Ejercicio no encontrado'
            ]);
        }
    }
    
    public function destroy($id)

    {

        $ejercicio = Ejercicios::find($id);

        if($ejercicio){
            $ejercicio -> delete();
            return response()->json([
            'status'=>200,
            'message'=>'Ejercicio eliminado correctamente'
        ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Ejercicio no encontrado'
            ]);
        }
        

    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'wod'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else
        {

            $ejercicio = Ejercicios::find($id);
            if($ejercicio)
            {
                $ejercicio-> wod = $request->input('wod');
                $ejercicio->status = $request->input('status') == true ? '1':'0';
                $ejercicio->save();
                return response()->json([
                    'status'=>200,
                    'message'=>"Wod del dia modificado correctamente"
                ]);              
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message'=>"Ejercicio no encontrado"
                ]);  
            }
          
        }
    }
}
