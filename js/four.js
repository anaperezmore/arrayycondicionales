let palabra = prompt("Introduce una palabra:");
let contadorVocales = 0;

palabra = palabra.toLowerCase();

// Bucle para recorrer cada letra de la palabra
for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];

    // Verificar si la letra es una vocal
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contadorVocales++; 
    }
}

console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocales.`);