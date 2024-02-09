// Напишіть функцію, яка приймає на вхід масив строк та повертає новий масив, який містять тільки унікальні значення.

function uniqueStrings(array) {
    return Array.from(new Set(array));
}

console.log('7. FUNCTION THAT RETURNS AN ARRAY CONTAINING ONLY UNIQUE VALUES'); 
const strings = ["apple", "orange", "apple", "banana", "orange"];
console.log('input mass -> ', strings);
console.log('output mass -> ', uniqueStrings(strings));