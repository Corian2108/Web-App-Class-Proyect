<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        $gender = $this->faker->randomElement(['Male', 'Female']);

        return [
            'name' => $this->faker->name($gender),
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => $this->faker->password,
            'remember_token' => Str::random(10),
        ];
    }
}
