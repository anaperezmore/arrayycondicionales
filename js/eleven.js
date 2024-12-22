let palabras = prompt("Ingrese una lista de palabras separadas por comas:");

let listaDePalabras = palabras.split(",");

// Bucle 
for (let i = 0; i < listaDePalabras.length; i++) {
    
    let palabra = listaDePalabras[i].trim().toLowerCase();

    // Verificar si la palabra es palíndroma
    let palabraInvertida = palabra.split("").reverse().join("");

    if (palabra === palabraInvertida) {
        console.log(palabra + " es una palabra palíndroma");
    }
}