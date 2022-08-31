//function for odd number
function isOdd(number) {
    let reminder = number % 2;
    if (reminder != 0) {
        return true;
    }
    return false;
}

var statement = isOdd(231);
console.log('is odd number ' + statement);

//function for even number
function isEven(number) {
    let reminder = number % 2;
    if (reminder == 0) {
        return true;
    }
    return false;
}

var state = isEven(231);
console.log('is even number ' + state);