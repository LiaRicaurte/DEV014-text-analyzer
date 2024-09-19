const analyzer = {  
  getWordCount: (text) => {
    const arregloPalabras = text.split(" ");
    let contadorPalabras = 0;
    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras [i] !== "") {
        contadorPalabras = contadorPalabras + 1
      } 
    }
    return contadorPalabras;
  },

  getCharacterCount: (text) => {
    return text.length; 
  },

  getCharacterCountExcludingSpaces: (text) => {
    const signosPuntuacion = [' ', '.', ',', ';', ':', '¡', '!', '¿', '?', '-', '—', '(', ')', '[', ']', '{', '}'];
    let textoSinPuntuacion = ''
    for (let i = 0; i < text.length; i++) {
      if (!signosPuntuacion.includes(text[i])) {
        textoSinPuntuacion += text[i];
      }
    }
    return textoSinPuntuacion.length
  },

  getAverageWordLength: (text) => {    
    const arregloPalabras = text.split(" ");
    let contadorPalabras = 0;
    for (let i = 0; i < arregloPalabras.length; i++) {
      if (arregloPalabras [i] !== "") {
        contadorPalabras = contadorPalabras + 1
      } 
    } 
    const signosPuntuacion = [' '];
    let textoSinPuntuacion = ''
    for (let i = 0; i < text.length; i++) {
      if (!signosPuntuacion.includes(text[i])) {
        textoSinPuntuacion += text[i];
      }
    }
    return Number ((textoSinPuntuacion.length / contadorPalabras).toFixed(2));
  },
  
  getNumberCount: (text) => {
    const arregloPalabras = text.trim().split(" ");
    let contadorNumeros = 0;
    
    for (let i = 0; i < arregloPalabras.length; i++) {    
     
      if (isNaN(arregloPalabras[i])) {
        contadorNumeros = contadorNumeros + 0
      } else {
        contadorNumeros = contadorNumeros + 1
      }

      const ultimoCaracter = arregloPalabras[i].length -1
      if(arregloPalabras[i].slice(-1) === '.'){
        const newElement =  arregloPalabras[i].slice(0,ultimoCaracter)
        if(!isNaN(newElement))
        {
          contadorNumeros ++
        }
      }
    }
    return contadorNumeros;

  },
  getNumberSum: (text) => {
    const arregloPalabras = text.trim().split(" ");
    let sumaNumeros = 0;

    for (let i = 0; i < arregloPalabras.length; i++) {
      let grupo = arregloPalabras[i]
      if(grupo.slice(-1) === '.'){
        grupo =  grupo.slice(0,-1)
      }
      if (isNaN(grupo)) {
        sumaNumeros = sumaNumeros + 0
      } else {
        sumaNumeros = sumaNumeros + Number (grupo)
      }

    }
    return sumaNumeros
  },
}
export default analyzer;
