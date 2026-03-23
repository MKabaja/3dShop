<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::factory(10)->create();

        Product::factory(3)->madeToOrder()->create();
        Product::factory(3)->outOfStock()->create();
        Product::factory(3)->inactive()->create();

        $this->command->info(
            '10 random products created, 
            including 3 made-to-order, 
            3 out-of-stock, and 3 inactive products.'
        );
    }
}
