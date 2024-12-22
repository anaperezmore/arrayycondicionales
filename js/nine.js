let numero = prompt("Ingrese un número entero positivo:");

// Asegurarse de que el número es válido (positivo y no vacío)
if (numero && parseInt(numero) > 0) {
    // Convertir el número a una cadena de texto y usar un bucle para invertirlo
    let numeroInvertido = "";
    
    // Bucle para recorrer el número de derecha a izquierda
    for (let i = numero.length - 1; i >= 0; i--) {
        numeroInvertido += numero[i];  // Agregar cada dígito al resultado invertido
    }

    // Mostrar el número invertido
    console.log("Número invertido: " + numeroInvertido);
} else {
    console.log("Por favor, ingrese un número entero positivo válido.");
}