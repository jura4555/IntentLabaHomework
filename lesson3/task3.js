// Напишіть функцію, яка приймає на вхід число та перевіряє, чи є воно простим числом.

function isPrime(number) {
    if (number <= 1) {
        return false; 
    }
    
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    
    return true; 
}

console.log('3. FUNCTION THAT CHECKS IF IT IS A PRIME NUMBER');
console.log('2 -> ', isPrime(2)); // true
console.log('3 -> ', isPrime(3)); // true
console.log('8 -> ', isPrime(8)); // false
console.log('17 -> ', isPrime(17)); // true
console.log('27 -> ', isPrime(27)); // false