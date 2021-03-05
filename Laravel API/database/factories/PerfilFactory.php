<?php

namespace Database\Factories;

use App\Models\Perfil;
use Illuminate\Database\Eloquent\Factories\Factory;

class PerfilFactory extends Factory
{
    protected $model = Perfil::class;

    public function definition()
    {
        $gender = $this->faker->randomElement(['Male', 'Female']);

        return [
            'name' => $this->faker->name($gender),
            'description' => $this->faker->sentence,
            //esto pone relaciones randomicas lo que puede generar errores, porque cada usuario tiene un perfil
            'user_id' => rand(1, 50)
        ];
    }
}
