//function to convert hour to minute
function minuteConverter(hour) {
    var minute = hour * 60;
    return minute;
}
var myHourValue = 1;
var minuteValue = minuteConverter(myHourValue);
console.log(minuteValue);