<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Comment extends Migration
{
    public function up()
    {
        //
    }

    public function down()
    {
        Schema::dropIfExists('locations');
    }
}
