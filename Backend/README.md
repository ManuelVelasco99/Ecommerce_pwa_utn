# Inicializando el backend

### Requisitos
Para el correcto funcionamiento del Backend debemos tener instalado NodeJs y TypeScript, y además tener corriendo la base de datos en mysql.
Para eso descargamos NodeJs desde su pagina oficial https://nodejs.org/es y luego desde la consola ejecutamos el sieguiente comando:

```sh
npm i -g typescript
```
### Instalando los paquetes
Para instalar todos los paquetes necesarios necesitamos parados en la ruta ../Backend y ejecutar el siguiente comando:

```sh
npm i 
```

### Configurando las variables de entorno

Debemos setear los valores de las variables de entorno que se encuentran en el archivo ../Backend/env/development.env

### Generamos el código Javascript
Para convertir el codigo en Typescript a javascript necesitamos ejecutar el siguiente comando en la consola situados en la ruta ../Backend :

```sh
tsc
```

### Levantar el servicio de Backend

Para que el backend entre en funcionamiento debemos ejecutar el siguiente comando en la consola situados en la ruta ../Backend :

```sh
npm run develop
```
### Agregamos las imagenes iniciales

Finalmente vamos a agregar las imagenes de algunos productos cargados en la base de datos.
Debemos mover las imagenes que se encuentran en la ruta ../images a ../Backend/dist/uploads/products
