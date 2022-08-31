// function for check age, is it odd or even

function checkAge(age) {
    var reminder = age % 2;
    if (reminder == 0) {
        return true;
    } else {
        return false;
    }
}
var myAgeValue = 31;
var myAge = checkAge(31);
console.log('Is my age even? ' + myAge);