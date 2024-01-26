// task6
// Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
let age = +prompt("Enter age");
if(age >= 14 && age <= 90){
    alert("This age is from 14 to 90");
}

// task7
// Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
if(age < 14 || age > 90){
    alert("This age is not from 14 to 90(without !)");
}

if (!(age >= 14 && age <= 90)){
    alert("This age is not from 14 to 90(with !)");
}

// task9
// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// Please use nested if blocks. Mind the overall readability of the code.
// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.
let userName = prompt("Who's there?");

if(userName == "Admin"){
    let password = prompt("Password");
    if(password == "TheMaster"){
        alert("Welcome!");
    } else if(pass === '' || pass === null){
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
}
else if(userName === '' || userName === null){
    alert("Canceled");
} else {
    alert("I don’t know you");
}