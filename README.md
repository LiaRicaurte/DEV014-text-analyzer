# Analizador de texto

## Índice

* [1. Primeros pasos](#1-primeros-pasos)
* [2. Proceso del proyecto](#2-resumen-del-proyecto)
* [3. Funcionalidades](#3-funcionalidades)

***

## 1. Primeros pasos

1. Leí el Readme del proyecto para entender las instrucciones a seguir y los OAS requeridos. (Lo leí mas de una vez durante todo el desarrollo del proyecto)

2. Realicé a mano un protipo sencillo de mi proyecto

3. Leí a breves rasgos los links proporcionados para cada OA para tenerlos en mente a medida que pudiera avanzar en el proyecto.

***

## 2. Proceso del proyecto

En este proyecto creé una aplicación web que sirve para que la usuaria
pueda analizar un texto en el navegador mostrando una serie de indicadores y
métricas específicas sobre caracteres, letras, números, etc. 

La aplicación utiliza HTML, lenguaje de Javascript y estilo CSS.

**HTML**

El desarrollo de mi proyecto inició con la estructuración de los elementos requeridos para crear el analizador de texto. Esta fue la parte más sencilla y la base para poder agregar estilo y función.

Para colocar cada elemento estudié sobre los tipos de etiquetas que existen y los atributos con las que se pueden asociar cada una de ellas.

Finalmente, analicé las etiquetas que se encargan de linkear el archivo HTML con los archivos de Javascript y CSS, las cuales ya venían preestablecidas en el proyecto.

**Javascript y Web APIs**

Para agregar funcionalidad a cada indicador en el analizador de texto, trabajé a la par con los archivos analyzer.js e index.js. 
El archivo analyzer.js es el que se encarga de alamcenar las funciones; y el archivo index.js el que se encarga de almacenar los eventos y manipulaciones dinámicas del DOM, llamando a los elementos de HTML a través de los selectores del DOM.

Entonces, al crear la primera función en el analyzer, por ejemplo: contador de palabras, enseguida le asigné una constante  en el archivo index que albergue su respectivo indicador en HTML para poder manipuarlo y así mostrar su resultado. 
Realicé este procedimiento con cada una de las funciones.

También analicé el código que me permite linkear ambos archivos.

Finalmente, agregué el evento del DOM "click" al botón que se encarga de limpiar el texto y las métricas, para que la usuaria pueda ingresar un texto nuevo. 

**EStilo CSS**

A medida que avancé con el desarrollo de funciones, también salté a darle estilo a mi aplicación para poder hacer pruebas en el navegador. Para hacerlo seguí los siguientes criterios:

1. Colores sobrios:
  Me basé en una gama de colores neutral pero a la vez colorida. Busqué los codigos de color y los apliqué.

2. Alineación y tamaño de elementos:
  Me basé en la jerarquía de cada elemento para darle un tamaño y una alineación adecuada.

3. Formato de modelo de caja
  Apliqué márgenes, rellenos y bordes que diferencien lo suficiente a cada elemento y que a su vez no sean muy llamativos.

4. Interfaz amigable para la usuaria. 
  Procuré que la visualización de la interfaz sea lo mas neutral y sencilla posible para que sea de uso fácil y claro para la usuaria.

  Para cada bloque de declaraciones usé diferentes selectores de CSS para poder llamarlos de manera más específica.

  ***

## 3. Funcionalidades

El listado de funcionalidades que incliye el analizador es el siguiente:

1. La aplicación debe permite a la usuaria ingresar un texto escribiéndolo
en un cuadro de texto.

2. La aplicación calcula las siguientes métricas y actualizaa el
resultado en tiempo real a medida que la usuaria escribe su texto:

    - **Recuento de palabras**: la aplicación debe poder contar el número de
    palabras en el texto de entrada y mostrar este recuento a la usuaria
    - **Recuento de caracteres**: la aplicación debe poder contar el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y mostrar este recuento a la usuaria.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación debe poder contar el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento
    a la usuaria.
    - **Recuento de números**: la aplicación debe contar cúantos números hay en
    el texto de entrada y mostrar este recuento a la usuaria.
    - **Suma total de números**: la aplicación debe sumar todos los números que
    hay en el texto de entrada y mostrar el resultado a la usuaria.
    - **Longitud media de las palabras**: la aplicación debe calcular la
    longitud media de las palabras en el texto de entrada y mostrársela a la usuaria.



 ## **GRACIAS :)**
 Autora: Ana Lía Ricaurte
