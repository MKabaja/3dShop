<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $name = fake()->words(3, true),
            'slug' => Str::slug($name),
            'description' => fake()->paragraph(),
            'price' => fake()->numberBetween(500, 20000),
            'stock' => fake()->numberBetween(0, 100),
            'is_made_to_order' => false,
            'is_active' => true,
            'production_days' => null,
        ];
    }

    public function madeToOrder(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_made_to_order' => true,
            'production_days' => fake()->numberBetween(1, 14),
        ]);
    }

    public function outOfStock(): static
    {
        return $this->state(fn (array $attributes) => [
            'stock' => 0,
        ]);
    }

    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}
