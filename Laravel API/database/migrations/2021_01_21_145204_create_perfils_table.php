<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePerfilsTable extends Migration
{
    public function up()
    {
        Schema::create('perfils', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            //agreagado
            $table->string('name')->nullable();
            $table->string('descripcion')->nullable();
            //relación uno a uno con users
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('perfils');
    }
}
