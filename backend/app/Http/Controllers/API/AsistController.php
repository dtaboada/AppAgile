<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Horario;
use App\Models\UserHorario;

class AsistController extends Controller
{
    public function asistir(Request $request)
    {

        $horarioId = $request->input('horarioId');
        $userId = auth()->user()->id;
        $horario = Horario::find($horarioId);
        
     
        if($horario)
        {
            if($horario->cupo > 0){
                $this->GuardarCupo($horario);
                $this->GuardarUserHorario($horarioId,$userId);
                return response()->json([
                    'status'=>201,
                    'horario'=>$horario
                ]);
            }else{
                return response()->json([
                    'status'=>200,
                    'message'=>'No hay cupo'
                ]);
       
            }    
        }
        else 
        {
            return response()->json([
                'status'=>200,
                'message'=>'Horario no encontrado'
            ]);
        }
    }
        //ASI ES EL JOIN.
        /* 
        $horario = Horario::where('horarios.id', $horarioId)
        ->leftJoin('user_horarios', 'horarios.id', '=', 'user_horarios.horario_id')
        ->first();
        return response()->json([
            'status'=>201,
            'horario'=>$horario
        ]);
        */
 


    private function GuardarCupo($horario){
        $horario->cupo = $horario->cupo -1;
        $horario->save();
    }



    private function GuardarUserHorario($horarioId,$userId){
        $userHorario = new UserHorario;
        $userHorario->horario_id = $horarioId;
        $userHorario->user_id = $userId;
        $userHorario->asiste = true;
        $userHorario->save();   
    }
}