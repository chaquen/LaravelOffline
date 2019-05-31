<p align="center"></p>



## Acerca Laravel Offline

Laravel offline es un proyecto personal para probar la funcionalidad offline junto al framework laravel 5.5


Laravel offline es accecible desde cualquier navegador que soporte esta funcionalidad.

## Como funciona Laravel offline

Primero debera instalar Laravel 5.5 o la versión que usted desee usar [documentación](https://laravel.com/docs).

El archivo [appcache](https://github.com/chaquen/LaravelOffline/blob/master/public/appcache), ubicado en la carpeta public, es el encargado de registrar los archivos que estaran directamenete relacionados con la funcionalidad offline, para aprender mas de este tema lo invito a leer el siguiente [artículo](https://www.html5rocks.com/en/tutorials/appcache/beginner/), ademas allí encontrara una excelente ruta de conocimiento para implementar appcache.

Existen dos archivos ubicados también en la carpeta [public/js](https://github.com/chaquen/LaravelOffline/tree/master/public/js), llamados offline.js y logica.js, el primero tiene como finalidad verificar y registrar las acciones de la aplicación cuando esta en modo offline, y el segundo tiene toda la lógica de la aplicación, la cual tiene como fin sumar dos números y registrar dichos números en una base de datos, en caso de que se pierda la conexión, se almacenaran dichos datos, en el navegador usando [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)   

La tecnologia de acceso offline es completamente manejada por el cliente por lo que no es completamente necesario instalar Laravel, ya que puede ser usado con cualquier otro framework o lenguaje de servidor,e ste proyecto es netamente una prueba y no tiene fin alguno.   
## Como poner en marcha
## Paso 1. Dar permisos a carpetas storage y storage logs
	sudo chmod 777 -R storage
	cd storage 
	sudo chmod 777 -R logs
## Paso 2. Instalar paquetes.
	composer install
## Paso 3. Crear archivo .env
## Paso 4. Crear key para la aplicación
	php artisan key:generate
## Paso 5. Correr migración
    php artisan migrate






