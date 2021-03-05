<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLevelInUser extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //añadir campo relación a foreignkey
            $table->bigInteger ('level_id')->after('id');
            $table->foreign ('level_id')->references('id')->on('levels');
        });
    }

    public function down()
    {
        Schema::table('user', function (Blueprint $table) {
            //
        });
    }
}
