let total = 0;

// Bucle para pedir números al usuario
while (total < 100) {
    // Pedir un número al usuario
    let numero = parseInt(prompt("Ingrese un número entero:"));

    // Sumar el número al total acumulado
    total += numero;

    // Mostrar el total acumulado después de sumar
    console.log("Total acumulado: " + total);
}


console.log("El total acumulado es: " + total);