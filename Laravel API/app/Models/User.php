<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function perfil(){
        return $this -> hasOne(Perfil::class);
    }
    //Relación uno a muchos con tabla categorías
    public function categoria(){
        return $this -> hasMany(Categoria::class);
    }
    //referencia al modelo level
    public function level(){
        return $this -> belongsTo(Level::class);
    }
    //referencia al modelo group
    public function groups()
    {
        return $this->belongsTo(Group::class)->withTimeStamp();
    }
    //referencia al modelo location
    public function location()
    {
        return $this->hasOneThrough(Location::class, Perfil::class);
    }
}
