
# SPA MarvelProject
SPA application for displaying marvel characters and their respective comics.


##**Instrucciones**

1.  Descargar e instalar todas las dependencias y paquetes necesarios para ejecutar el proyecto.

$       npm install

2.  Usar el comando grunt para iniciar el proyecto.

$       grunt serve
    
    
##**Descripción del proyecto**

Proyecto de frontend desarrollado usando principalmente *Angular.js*, *Javascript*, *Css*, el cual consume el *MARVEL API REST* y está compuesto por los siguientes archivos:


###package.json

Es el archivo que contiene los nombres de las librerías que utilizaremos para automatizar nuestras tareas y que reside en la raíz del proyecto. Aquí están los nombres y s respectiva versión de cada plugin que necesitaremos en nuestro proyecto.


###Gruntfile.js

Es el archivo base con el cual crearemos las tareas que necesitamos corra GruntJS por nosotros y que reside en la raíz del proyecto junto a package.json. En este archivo están definidas los plugins que utilizaremos y cómo deben trabajar, en esta ocasión incluyo los siguientes:

concat: concatena y minifica librerías JavaScript.
uglify: minifica archivos JavaScript.
imagemin: comprime imágenes.


###index.html

El archivo index.html es la página principal del dominio al cual se accederá desde Internet,en este archivo se incluyen todas las librerías, estilos, servicios, controladores de nuestra aplicación.







