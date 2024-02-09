// Напишіть функцію, яка приймає на вхід рядок та перевіряє, чи є він паліндромом 

function isPalindrome(str) {
    let formattedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let reverseStr = formattedStr.split('').reverse().join('');

    return formattedStr === reverseStr;
}


console.log('5. FUNCTION THAT CHECKS IF IT IS A PALINDROME');
console.log('racecar -> ', isPalindrome("racecar")); // true
console.log('hello -> ', isPalindrome("hello")); // false
console.log('A man, a plan, a canal, Panama -> ', isPalindrome("A man, a plan, a canal, Panama")); // true