for (let i = 1; i <= 50; i++) {
    // Verificar si el número es divisible entre 3 y 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Verificar si el número es divisible solo entre 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Verificar si el número es divisible solo entre 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // Si el número no es divisible ni entre 3 ni entre 5
    else {
        console.log(i);
    }
}