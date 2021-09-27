<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class DashboardController extends Controller
{
    public function wod(Request $request){

        $validator = Validator::make($request->all(), [
            'wod'=>'required|max:191',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else{
            $dashboard = new Dashboard;
            $dashboard->wod = $request->input('wod');
            $dashboard->status = $request->input('status') == true ? '1':'0';     ?)
            $dashboard->save();
            return response()->json([
                'status'=>200,
                'message'=>'Wod agregado correctamente'
            ]);
        }
      
    }
}
