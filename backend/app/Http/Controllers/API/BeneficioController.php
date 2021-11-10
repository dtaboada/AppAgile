<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Beneficio;
use Illuminate\Database\Eloquent\Delete;

class BeneficioController extends Controller
{
    public function beneficio(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'descripcion'=>'required',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else{
            $beneficios = new Beneficio;
            $beneficios->descripcion = $request->input('descripcion');
            $beneficios->status = $request->input('status') == true ? '1':'0';
            $beneficios->save();
            return response()->json([
                'status'=>200,
                'message'=>'Beneficio agregado correctamente',
            ]);
        }

       

    }

    public function edit($id){
        $beneficios = Beneficio::find($id);
        if($beneficios)
        {
            return response()->json([
                'status'=>200,
                'beneficios'=>$beneficios
            ]);
        }
        else 
        {
            return respoonse()->json([
                'status'=>404,
                'message'=>'Beneficio no encontrado'
            ]);
        }
    }
    
    public function destroy($id)

    {

        $beneficios = Beneficio::find($id);

        if($beneficios){
            $beneficios -> delete();
            return response()->json([
            'status'=>200,
            'message'=>'Beneficio eliminado correctamente'
        ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Beneficio no encontrado'
            ]);
        }
        

    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'descripcion'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else
        {

            $beneficios = Beneficio::find($id);
            if($beneficios)
            {
                $beneficios-> descripcion = $request->input('descripcion');
                $beneficios->save();
                return response()->json([
                    'status'=>200,
                    'message'=>"Beneficio modificado correctamente"
                ]);              
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message'=>"Beneficio no encontrado"
                ]);  
            }
          
        }
    }
}
