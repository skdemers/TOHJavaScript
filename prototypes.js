'use strict';

//Prototypes:
/// - a property that exists on every function in Javascript
/// - objects don't have a prototype property. Instead, they have __proto__
//define property on Array object to get last index in the array
Object.defineProperty(
    Array.prototype,
    'last',
    {
        get: function () {
            return this[this.length - 1]
        }
    }
   )
/*
var arr = ['red', 'green', 'blue'];
console.log("Last element: " + arr.last);
*/

//Both of these will point to the exact same instance 

//When a function is created
///1. An empty prototype object is created as well
///2. Then JS updates the functions prototype property to point to the new object.


function Cat(name, color) {
    this.name = name;
    this.color = color;
}

///3. We update the prototype object with the new property
Cat.prototype.age = 3;

///4. WHen creating a new object, a __prototype__ property is created on the object that points to the functions prototype
var ScottCat = new Cat("Fluffy", "White");

///5. When accessing the age property, JS first looks at my object, then traverses up the prototype chain to see if any anscestors have the value
console.info("Age of cat as set on prototype");
console.log(ScottCat.age);

///6. When the age property is set on the object instance, it overrides the prototype value
ScottCat.age = 6;
console.info("Age of cat as set on instance");
console.log(ScottCat.age);

///7.  An Cat object with no age will inherit the prototypr age 3
var LaurieCat = new Cat("Beaker", "White");
console.info("Age of Laurie Cat");
console.log(LaurieCat.age);

///8. If we change the prototype property
Cat.prototype = {age: 40}

///9. The first object prior to the change still has the original in-memory value
console.info("Scott cat age");
console.log(ScottCat.age);

///10. But the new obect reflects the change to 6
var LukeCat = new Cat("Beaker", "White");
console.info("Luke cat age");
console.log(LukeCat.age);

/*
console.dir("function prototype: " + Cat.prototype)
*/

////Display the objects prototype
var Fluffy = new Cat("fluffy", "black");

/*
console.dir("Object prototype: " + Fluffy.__proto__)
*/

//Creating Prototype chains

function animal(sound) {
    this.sound = sound || 'grunt';
}

animal.prototype.speak = function () {
    console.log("sound" + this.sound);
}

function Dog(name, color) {
    //1. Upon creating a cat object, initialize animal by calling into it's constructor for any 
    //initialization that needs to be done
    animal.call(this);
    this.name = name;
    this.color = color;
}

//2. sets the animal function as the prototype for the object and initializes prototype chain
Dog.prototype = Object.create(animal.prototype);


//3. Set constructor of dog to Dog, not animal
Dog.prototype.constructor = Dog;
var gonzo = new Dog("gonzo", "white");
console.info("Gozo says hi");
gonzo.speak();

console.info("gozo proto");
console.dir(gonzo.__proto__);
console.info("gozo proto proto");
console.dir(gonzo.__proto__.__proto__);

//Doing prototypes w/ Class syntax
function animal(sound) {
    this.sound = sound || 'grunt';
}

class Plant {
    constructor (sound) {
        this.sound = sound || 'tweet';
    }

    speak () {
        console.log("plan says " + this.sound);
    }
}

class Tree extends Plant {
    constructor (genus, species) {
        super("Moo");
        this.genus = genus;
        this.species  = species;
    }
}

var oak = new Tree ("foo", "bar");
oak.speak();
console.dir(oak.constructor)