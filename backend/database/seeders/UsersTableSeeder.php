<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();

        DB::table('users')->insert([
          'name' => 'Irene',
          'email' => 'ire@mail.com',
          'password' => bcrypt ('1234'),
          'remember_token' => str_random(10),

        ]);

        DB::table('users')->insert([
          'name' => 'Diego',
          'email' => 'die@mail.com',
          'password' => bcrypt ('1234'),
          'remember_token' => str_random(10),
          
        ]);
    
    
        
    }
}
