<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dashboard extends Model
{
    use HasFactory;
    protected $table = 'tablero';
    protected $fillable = [
        'wod',
        'status',
    ];
}
