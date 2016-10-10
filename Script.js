//strict mode shows errors and disallows deprectaed functions
'use strict';

//object literals
var workout = {
    title:"Strength Gym",
    date:"10/9/2016"
};

console.log("WO Name" + workout.title);

//Functions
workout.displayDate = function () {
    console.log("Date " + workout.date);
}

workout.displayDate();