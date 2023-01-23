// Let's use inheritance by creating a shape Object
function Shape() {}

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function() {
  console.log('draw');
}

Circle.prototype.duplicate = function() {
  console.log('duplicate');
}

const s = new Shape();
const c = new Circle(1); // With no radius it will undefined

console.log(s);
console.log(c);
s
// What we have occuring is s -> shapeBase (Shape.prototype)
// s -> shapeBase -> inherits from objectBase
c
// What we have occuring is c -> circleBase (Cirle.prototype)
// c -> circleBase -> inherits from objectBase

// To setup inheritance we need to do the following
// c -> circleBase -> inherit from -> shapeBase -> objectBase

// We can accomplish this by doing the following
// Before "implicit relationship"
// Circle.prototype = Object.create(Object.prototype); // objectBase
// Now we change circleBase to a new object
// That inherits from Shape.prototype // shapeBase
Circle.prototype = Object.create(Shape.prototype)
console.table(Circle);
s
c
console.table(c);