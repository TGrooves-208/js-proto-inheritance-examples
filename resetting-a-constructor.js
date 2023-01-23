function Shape() {}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

// Before this line we had the following
// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle();
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Whenever we reset the prototype of an Object
// We should also reset the constructor

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

// Every object in JS that returns the function that was used to construct that {}
new Circle.prototype.constructor(1);
new Circle(1)

console.table(new Circle(5));
console.table(new Circle.prototype.constructor(1));