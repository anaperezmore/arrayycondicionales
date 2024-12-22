const numeros = [23, 45, 12, 67, 34, 89, 21];

// Inicializar la variable para almacenar el número más grande
let maxNum = numeros[0];

// Usar un bucle 
for (let i = 1; i < numeros.length; i++) {
    // Usar un condicional 
    if (numeros[i] > maxNum) {
        maxNum = numeros[i];
    }
}

console.log("El número más grande es:", maxNum);