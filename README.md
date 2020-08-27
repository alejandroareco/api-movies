# Creacion api-movies

## Objetivo 
Tener creada una api con los siguientes endpoints o recursos
Para la tabla **movies**
- Obtener todos los registros
- Obtener un registro
- Crear un nuevo registro

Para cualquiera de las **tablas** (*actors, series, genres, episodes*)
- Obtener todos los registros
- Obtener un registro
- Crear un nuevo registro

La tabla seleccionada es **series**

**Source Database**: movies_db

## Endpoints
localhost:3000/movies

localhost:3000/series

## Como funciona?

### Movies
Para obtener **todas** las peliculas, simplemente acceder a [/movies](http://localhost:3000/movies)

Para obtener **un registro** en particular, acceder a [/movies/detail](http://localhost:3000/movies/detail/) y contatenar el numero de id que corresponda a la busqueda deseada.

Para **crear** un registro nuevo en la Base de Datos, acceder mediante **POSTMAN** utilizando el metodo POST > Body > x-www-form-urlencoded
la url: (http://localhost:3000/movies/create). Recordar ingresar los key-values correspondientes:

- title
- rating
- awards
- release_date
- length

### Series
Para obtener **todas** las series, simplemente acceder a [/series](http://localhost:3000/series)

Para obtener **un registro** en particular, acceder a [/series/detail](http://localhost:3000/series/detail/) y contatenar el numero de id que corresponda a la busqueda deseada.

Para **crear** un registro nuevo en la Base de Datos, acceder mediante **POSTMAN** utilizando el metodo POST > Body > x-www-form-urlencoded
la url: (http://localhost:3000/series/create). Recordar ingresar los key-values correspondientes:

- title
- release_date
- end_date
