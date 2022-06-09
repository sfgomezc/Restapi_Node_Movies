# Server CRUD Movies

Este proyecto es una REST API usando Node.js que tiene un CRUD con cambios temporales (mientras se ejecuta ejecución) basado en un archivo `sample.json`.

### Se usa las siguiente librerías o módulos:

Crear package json
```bash
npm init --yes
```

Instalar framework express para escribir código de servidor (crear servidor, enrutador) y morgan para escribir las peticiones
```bash
npm i express morgan
```

Instalar (en ambiente Dev) modulo Nodemon para reiniciar el servidor cuando se haga cambios en el código
```bash
npm i nodemon -D
```

Ejecutar el archivo js que sirve como server
```bash
node src/server.js
```
Ejecutar el archivo js que sirve como server con Nodemon
```bash
nodemon src/server.js
```

Ejecutar el comando dev, que se configura en el package.json (para ejecutar el js que sirve como server)
```bash
npm run dev
```

Librería para recorrer un arreglo, buscar, eliminar dentro de este.
```bash
npm i underscore
```

### Pruebas
Las pruebas se pueden realizar en un Client Rest como Postman pero en este caso se prueba con la extensión de Visual Code REST Client, ejecutandolo desde el archivos `api.rest`.

### Guia
Proyecto generado del tutorial (Tu primer REST API usando Node.js, ¿Que es una REST API?)  [Enlace](https://www.youtube.com/watch?v=bK3AJfs7qNY&ab_channel=FaztCode).

