<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Delete;

class Horario extends Model
{
    use HasFactory;
    protected $table = 'horarios';
    protected $fillable = [
        'hora',
        'status',
    ];
}
