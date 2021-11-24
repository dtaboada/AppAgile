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
        $asiste = $request->input('asiste');
        $userId = auth()->user()->id;
        $horario = Horario::find($horarioId);
        
     
        if($horario)
        {
            if ($asiste){
                if($horario->cupo > 0){
                    $this->GuardarCupo($horario);
                }else{
                    return response()->json([
                        'status'=>200,
                        'message'=>'No hay cupo'
                    ]);
                }    
            }else{
                $this->LiberarCupo($horario);
            }

            $this->GuardarUserHorario($horarioId,$userId,$asiste);
            return response()->json([
                'status'=>201,
                'horario'=>$horario
            ]);
        }
        else 
        {
            return response()->json([
                'status'=>200,
                'message'=>'Horario no encontrado'
            ]);
        }
    }


    private function GuardarCupo($horario){
        $horario->cupo = $horario->cupo -1;
        $horario->save();
    }

    private function LiberarCupo($horario){
        $horario->cupo = $horario->cupo+1;
        $horario->save();
    }

    private function GuardarUserHorario($horarioId,$userId, $asiste){
        UserHorario::upsert([
            [
                'horario_id' => $horarioId, 
                'user_id' => $userId,
                'asiste' => $asiste
            ]
        ], ['horario_id', 'user_id'], ['asiste']);
    }
}
