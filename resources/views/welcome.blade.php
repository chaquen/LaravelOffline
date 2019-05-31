<!doctype html>
<html lang="{{ app()->getLocale() }}" manifest="appcache">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta id="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
        <title id="tl">{{config('app.name')}}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">

            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    @endauth
                </div>
            @endif

            <div class="content">
                <h1>{{config('app.name')}} <b id="b"></b></h1>
                <h1>Ingresa un número</h1>
                <input id="num2" type="number" name="val">
                <h1>El total es: <b id="total"></b></h1>
                
                <h2 id="h2"></h2>
                <button id="btnGuardarSuma">Guardar +</button>
                <h6 id="lblMsn"></h6>
            </div>
            <h6>Visita el repositorio<a href="https://github.com/chaquen/LaravelOffline">Github</a></h6>
        </div>
        <script type="text/javascript">
            var url="{{config('app.url')}}";
        </script>
        <script type="text/javascript" src="{{asset('js/logica.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/offline.js')}}"></script>
        
    </body>
</html>
