let filas = parseInt(prompt("Ingrese el número de filas para el triángulo:"));

// Bucle para generar el triángulo 
for (let i = filas; i >= 1; i--) {
    let linea = '';

    // Bucle interno para agregar los asteriscos 
    for (let j = 1; j <= i; j++) {
        linea += '*';
    }

    console.log(linea);
}