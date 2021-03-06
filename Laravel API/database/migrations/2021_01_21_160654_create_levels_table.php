<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLevelsTable extends Migration
{
    public function up()
    {
        Schema::create('levels', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            //agregado
            $table->string ('nombre');
        });
    }

    public function down()
    {
        Schema::dropIfExists('levels');
    }
}
