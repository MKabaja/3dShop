<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    private string $adminEmail = 'admin@3dshop.com';

    public function run(): void
    {

        User::factory()->admin()->create([
            'name' => 'Admin User',
            'email' => $this->adminEmail,
            'password' => 'admin',
        ]);

        $this->command->info("Admin user created with email: {$this->adminEmail}");
    }
}
