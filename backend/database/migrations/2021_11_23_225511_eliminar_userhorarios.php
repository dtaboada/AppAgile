<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EliminarUserhorarios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('user_horarios');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('user_horarios', function (Blueprint $table) {
            $table->id();
            $table->boolean('asiste');
            $table->integer('user_id');
            $table->integer('horario_id');
            $table->timestamps();
        });
    }
}
