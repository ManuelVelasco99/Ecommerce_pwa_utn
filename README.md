# Proyecto Ecommerce pwa UTN
Este proyecto pertenece al curso Programador web avanzado que dicta la UTN BA. En este mismo, decidí construir un Ecommerce.
## Alcance funcional
En el proyecto se desarrollo el registro de nuevos usuarios y confirmacion mediante un envio de mail. El login de los mismos y posterior autenticacion mediente un token.
También las vistas del administrador que puede realizar ABM de productos y categorias.
Y el carrito de compras aunque sin la opcion de pagar los productos.
## Tecnologías utilizadas 
* NodeJs
* Framework Express
* MySql
* Angular
* Angular Material
* TypeScript
* JavaScrpit
## Iniciando el proyecto
#### Iniciar los servicios de MySql y crear la base de datos
Iniciamos los servicios de mysql y ejecutar los scripts que se encuentran en la carpeta ../Mysql_scripts.

#### Iniciar el Backend
Para las instrucciones sobre el Backend dirigirse al readmne ubicado en su respectiva carpeta.

#### Iniciar el Frontend
Para las instrucciones sobre el Frontend dirigirse al readmne ubicado en su respectiva carpeta.

### Intrucciones para utilizar el proyecto
Una vez corriento el front y el back, tendremos que ir a la ruta donde esta corriendo angular ej 'localhost4200'/home.
En la ruta /home veremos el inicio de la pagina donde se listan todos los proudctos y donde ademas podemos filtrarlos por las categorias que se muestran a la izquierda. Podemos agregarlos al carrito donde nos avisara que se ha agregado con exito o bien que ya se encuentra añadido.
En el navbar veremos las opciones de iniciar sesion, registrarnos o el icono del carrito, los cuales llevaran a las correspondientes rutas, las cuales son:
##### /login
Donde podremos ingresar un formulario para loguearnos, y de ser exitoso nos almacenara un token para la posterior autenticacion.
##### /register
Aqui podremos completar los datos para efectuar el registro, que ademas de validar que los campos sean correctos tambien realiza una consulta para ver si el mail ya se encuentra registrado.
Si el registro es exitoso nos llegara un correo con un link para ir a una ruta donde se da de alta el usuario validando su email.

##### /carrito
Aqui se listan los productos que fuimos añadiendo al carrito y ademas podemos quitarlos. Tambien se muestra el total a pagar.

##### /admin/productos y /admin/categorias
Al intentar ingresar a estas rutas se intentara verificar si el token es valido y si el usuario es administrador. Si el token es invalido nos enviara al login y si el usuario no es administrador a home.
En estas rutas el administrador puede realizar ABM de categorias y productos.

#### Datos iniciales

```sh
usuario administrador
{
    email : admin@gmail.com
    password : 1234
}
usuario normal
{
    email : user@gmail.com
    password : 1234
}
```



## Documentacion

Algunos de los servicios del Backend se encuentran documentados, pueden verse en el abriendo en el navegador el archivo index.html dentro de la carpeta ../Swagger

---

### Desarrollado por Velasco Manuel
