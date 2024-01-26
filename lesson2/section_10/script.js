// task 2
// The name of JavaScript
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let officialName = prompt('What is the "official" name of JavaScript?');
if(officialName == 'ECMAScript'){
    alert('Right!');
} else {
    alert('You dont know? ECMAScript!');
}

// task 3
// Show the sign
// Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

let inputNumber = prompt('Type a number');
if(inputNumber > 0){
    alert(1);
} else if(inputNumber < 0){
    alert(-1);
} else {
    alert(0);
}