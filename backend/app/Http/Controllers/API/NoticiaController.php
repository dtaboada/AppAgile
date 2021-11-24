<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Noticia;
use Illuminate\Database\Eloquent\Delete;

class NoticiaController extends Controller
{

    public function index()
    {
        $noticias = Noticia::all();
        return response()->json([
            'status'=>200,
            'noticia'=>$noticias,
        ]);
    }
    public function add(Request $request){
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
            $noticias = new Noticia;
            $noticias->descripcion = $request->input('descripcion');
            $noticias->status = $request->input('status') == true ? '1':'0';
            $noticias->save();
            return response()->json([
                'status'=>200,
                'message'=>'Noticia agregado correctamente',
            ]);
        }
    }

        public function edit($id){
            $noticias = Noticia::find($id);
            if($noticias)
            {
                return response()->json([
                    'status'=>200,
                    'noticias'=>$noticias
                ]);
            }
            else 
            {
                return respoonse()->json([
                    'status'=>404,
                    'message'=>'Noticia no encontrado'
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

            $noticias = Noticia::find($id);
            if($noticias)
            {
                $noticias-> descripcion = $request->input('descripcion');
                $noticias->save();
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

        public function destroy($id){

        $noticias = Noticia::find($id);

        if($noticias){
            $noticias -> delete();
            return response()->json([
            'status'=>200,
            'message'=>'Noticia eliminado correctamente'
        ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Noticia no encontrado'
            ]);
        }
        

    }
}
    

