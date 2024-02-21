// Напишіть функцію, яка приймає на вхід число та повертає його факторіал.

function factorial(number) {

    if (number < 0) {
        return "Factorial is defined only for non-negative integers";
    } else if (number === 0 || number === 1) {
        return 1; // Факторіал 0 та 1 дорівнює 1
    } else {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }
    
}

console.log('4. FUNCTION THAT RETURN FACTORIAL NUMBER');
console.log('5! -> ', factorial(5)); // 120
console.log('10! -> ', factorial(10)); //3 628 800
