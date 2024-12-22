let numero = parseInt(prompt("Introduce un número entre 1 y 100:"));


if (numero >= 1 && numero <= 100) {
    // Bucle para imprimir la tabla de multiplicar
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        // Mayor a 1000, detener el bucle
        if (resultado > 1000) {
            break;
        }
        console.log(`${numero} x ${i} = ${resultado}`);
    }
} else {
    console.log("Introduce un número entre 1 y 100.");
}