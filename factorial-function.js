//function for factorial in for loop
function factorialOfANumber(number) {
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var myNumber = 7;
var myNumberFactorial = factorialOfANumber(myNumber);
console.log(myNumberFactorial);

//function for factorial in for loop reverse process
function getFactorial(num) {
    let factorial = 1;
    for (let i = num; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
var myNum = getFactorial(7);
console.log(myNum);