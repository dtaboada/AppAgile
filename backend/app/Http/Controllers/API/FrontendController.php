<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ejercicios;
use App\Models\Horario;
use App\Models\Beneficio;
use App\Models\Noticia;
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

    
    public function beneficios()
    {
        $beneficios = Beneficio::where('status','0')->get();
        

        return response()->json([
            'status'=>200,
            'beneficio'=>$beneficios,
        ]);
    }

    public function noticias()
    {
        $noticias = Noticia::where('status','0')->get();
        

        return response()->json([
            'status'=>200,
            'noticias'=>$noticias,
        ]);
    }


    public function GetUserHorarioByHorarioId(){
        $userId = auth()->user()->id;
        $horarios = Horario::where([
            ['horarios.status','0'],
        ])
        ->leftJoin('user_horarios', 'horarios.id', '=', 'user_horarios.horario_id')
        ->get(['horarios.id','user_horarios.user_id',
        'horarios.hora', 
        'horarios.cupo', 
        'user_horarios.asiste']);

        if($horarios){
            return response()->json([
                'status'=>200,
                'horarios'=> $horarios
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=> 'User horario not found'
            ]);
        }
    }
}

/*
$query->where([
    ['column_1', '=', 'value_1'],
    ['column_2', '<>', 'value_2'],
    [COLUMN, OPERATOR, VALUE],
    ...
])*/