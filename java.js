 function factorial(n) {
    if (n < 0) {
        return NaN; // Factorial is not defined for negative numbers
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example ;
console.log(factorial(3)); 