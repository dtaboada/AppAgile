<?php

namespace Database\Seeders;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
  
        DB::table('users')->truncate();

        DB::table('users')->insert([
          'name' => 'Irene',
          'email' => 'ire@mail.com',
          'password' => bcrypt ('1234'),
          'remember_token' =>  Str::random(10),

        ]);

        DB::table('users')->insert([
          'name' => 'Diego',
          'email' => 'die@mail.com',
          'password' => bcrypt ('1234'),
          'remember_token' => Str::random(10),

        ]);

        DB::table('users')->insert([
          'name' => 'Maxi',
          'email' => 'max@mail.com',
          'password' => bcrypt ('1234'),
          'remember_token' => Str::random(10),

        ]);

        DB::table('users')->insert([
          'name' => 'Fede',
          'email' => 'Fefix@mail.com',
          'password' => bcrypt ('1234'),
          'remember_token' => Str::random(10),

        ]);

        DB::table('users')->insert([
          'name' => 'Marce',
          'email' => 'Marchelo@mail.com',
          'password' => bcrypt ('1234'),
          'remember_token' => Str::random(10),

        ]);
    }
}

