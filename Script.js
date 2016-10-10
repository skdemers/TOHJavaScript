//strict mode shows errors and disallows deprectaed functions
'use strict';




//ES6 method for creating objects

class ES6Workout {

    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    speakObject () {
        console.log("Object:");
        console.dir(this);
    }
}

var ES6WorkoutObject =  new ES6Workout("ES6 Strength", "10//30/16");
ES6WorkoutObject.speakObject();

//console.dir(ES6WorkoutObject);

//constructor
/// 1. new' instantiates a new object 
/// 2. 'this' is set to the context of the new object
/// 3. The constructor function is called

function CWorkout(title, date) {
    this.title = title;
    this.date = date;
}

var CWorkout = new CWorkout("STrength Home", "10//11/16");


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

//define a property as read only

workout.displayDate();
Object.defineProperty(workout, 'title', {writable: false} );

//if 'name' point to another object, the properties of that inder object can still be changed
//to prevent any object properties, use 'freeze'
/* Object.freeze(workout.title); */

//throws an error - not writable
/* workout.title = "foo"; */
//Property descriptors
console.dir(Object.getOwnPropertyDescriptor(workout , 'title'));

/* Returns:
configurable:true
enumerable:true
value:"Strength Gym"
writable:true
*/

//Iterating over an object
//// for .. in
console.log(" for .. in");
for (var prop in ES6WorkoutObject ) {
    console.log(prop + ": " + ES6WorkoutObject[prop]);
}


//Getters 
//Setters

Object.defineProperty(ES6WorkoutObject, 'LabeledTitle',
 {
     get: function() {
         return 'Title: ' + this.title;
     },
     set: function(label) {
         this.title = label;
     }

 });

console.log("Labled Title - " + ES6WorkoutObject.LabeledTitle);
ES6WorkoutObject.title = "Foo: Bar Title";
console.log("Foo set title: " + ES6WorkoutObject.title);


