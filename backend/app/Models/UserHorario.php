<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserHorario extends Model
{
    use HasFactory;
    protected $table = 'user_horarios';
    protected $fillable = [
        'asiste',
        'user_id',
        'horario_id',
    ];
}
