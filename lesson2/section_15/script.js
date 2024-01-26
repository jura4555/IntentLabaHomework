// task3
// Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.
// For instance:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b){
    if(a < b) {
        return a;
    } else {
        return b;
    }
}

// task4
// Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    
    return result;
  }
  
  let x = prompt("Please enter x");
  let n = prompt("Please enter n");
  
  if (n < 1) {
    alert("Power ${n} is not supported, you must use a positive integer");
  } else {
    alert(pow(x, n));
  }
  