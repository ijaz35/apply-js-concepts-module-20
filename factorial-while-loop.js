//fartorial by while loop process-1
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;

    }
    return factorial;
}
const myNumber = getFactorial(7);
console.log(myNumber);
// fartorial by while loop process-2
function factorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const yourNumber = factorial(7);
console.log(yourNumber);