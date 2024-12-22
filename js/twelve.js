let numeroGenerado = Math.floor(Math.random() * 10) + 1;

// Bucle 
let adivinanzaCorrecta = false;

while (!adivinanzaCorrecta) {
    // Pedir al usuario que ingrese su adivinanza
    let numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 10:"));

    // Verificar si la adivinanza es correcta
    if (numeroUsuario === numeroGenerado) {
        console.log("¡Felicidades! Adivinaste el número correctamente.");
        adivinanzaCorrecta = true; // Detener el bucle
    } else if (numeroUsuario < numeroGenerado) {
        console.log("El número es mayor. Intenta de nuevo.");
    } else {
        console.log("El número es menor. Intenta de nuevo.");
    }
}