<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCupoColumnIntoHorarios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('horarios', function (Blueprint $table) {
            $table->integer('cupo')->default(10)->after('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('horarios', function (Blueprint $table) {
            $table->dropColumn(['cupo']);
        });
    }
}
