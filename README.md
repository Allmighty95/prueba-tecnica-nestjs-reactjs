# Estructura del proyecto
Las tecnologias que se utilizaron son react js y nest js con postman y sqlite3, LA COLECCION DE POSTMAN ESTA ANCLADA DIRECTAMENTE A LA CARPETA RAIZ DEL PROYECTO
  - El proyecto se define por dos carpetas llamadas 
    - Client
    - Api
  - Donde Albergan el Backend y el Frontend la estructura va asi:
    /Client
    -Src: Alberga todas las carpetas del Frontend
    -Pages: Alberga 2 archivos JS llamados ConsultarArchivo.js y CrearAlumno.js donde albergan el codigo del Frontend (Interfaz)
    -Services: Alberga 1 archivo llamado Api.js donde alberga la conexion del Frontend y el Backend
    -App.js: Alberga las rutas de la interfaz y reutilizacion de componentes

    /Api
    -Src: Alberga todas las capetas del Backend
    -Auth: Alberga un archivo llamado api-key.guard.ts donde se hace la autentificacion con Api key
    -Students: Alberga dos carpetas llamadas DTO y Entities
    -DTO: Contiene los dtos del create student y update student
    -Entities: Contiene las entidades de la base de datos

### Instalacion
    

Instala las dependencias y luego dependiendo de la plataforma ejecuta el comando correspondiente:

__Windows__:
```sh api
$ npm install 
$ npm run start:dev
```
```sh client
$ npm install 
$ npm run start



