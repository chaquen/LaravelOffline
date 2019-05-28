<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    return view('welcome');
});

Route::get('/recurso', function () {

    return response()->json(rand(1,100));
});

Route::post('/guardar', function (Request $request) {

	DB::table('prueba')->insert(['n_uno'=>$_POST['V1'],
								'n_dos'=>$_POST['V2']]);

	 return response()->json(["guardado :)"]);
    
    //Storage::append('sumas.log', $_POST['V1']."+".$_POST['V2'].'='.$_POST['T']);
});

Route::post('/guardar_online', function (Request $request) {

	$valores=json_decode($_SERVER['HTTP_DATA']);
	foreach ($valores as $key => $value) {
		
		\DB::table('prueba')->insert(['n_uno'=>$value[0],
								 'n_dos'=>$value[1]]);
	}
	

	 return response()->json("guardado :|");
    
    //Storage::append('sumas.log', $_POST['V1']."+".$_POST['V2'].'='.$_POST['T']);
});
