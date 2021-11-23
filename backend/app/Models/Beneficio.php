<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Delete;

class Beneficio extends Model
{
    use HasFactory;
    protected $table = 'beneficios';
    protected $fillable = [
        'descripcion',
        'status',
    ];
}
