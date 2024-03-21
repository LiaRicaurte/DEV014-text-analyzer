import analyzer from './analyzer.js';
// constantes globales: puedo usarlos en todo el index.js en cualquier funcion
const cuadrotexto = document.querySelector("textarea");
const palabras = document.querySelector("li[data-testid=word-count]");
const caracteres = document.querySelector("li[data-testid=character-count]");
const caracteresSinESpacios = document.querySelector("li[data-testid=character-no-spaces-count]");
const promedioPalabras = document.querySelector("li[data-testid=word-length-average]")
const numeros = document.querySelector("li[data-testid=number-count]")
const sumaNumeros = document.querySelector("li[data-testid=number-sum]")
const boton = document.getElementById("reset-button");


cuadrotexto.addEventListener("input", function(){
  palabras.innerHTML = "Cantidad de palabras: " + analyzer.getWordCount(cuadrotexto.value);
  caracteres.innerHTML = "Cantidad de caracteres: " + analyzer.getCharacterCount(cuadrotexto.value);
  caracteresSinESpacios.innerHTML = "Caracteres sin espacios ni signos de puntuación: " + analyzer.getCharacterCountExcludingSpaces(cuadrotexto.value);
  promedioPalabras.innerHTML = "Longitud media de las palabras: " + analyzer.getAverageWordLength(cuadrotexto.value); 
  numeros.innerHTML = "Cantidad de números: " + analyzer.getNumberCount(cuadrotexto.value);
  sumaNumeros.innerHTML = "Suma de números: " + analyzer.getNumberSum(cuadrotexto.value);
});

boton.addEventListener("click", function (){
  cuadrotexto.value = "";
  //borrar las metricas de los <li>
  palabras.innerHTML = "Cantidad de palabras: " + "0";
  caracteres.innerHTML = "Cantidad de caracteres: " + "0";
  caracteresSinESpacios.innerHTML = "Caracteres sin espacios ni signos de puntuación: " + "0";
  promedioPalabras.innerHTML = "Longitud media de las palabras: " + "0";
  numeros.innerHTML = "Cantidad de números: " + "0";
  sumaNumeros.innerHTML = "Suma de números: " + "0";
  

});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`