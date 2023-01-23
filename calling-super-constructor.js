// Calling the super constructor
// We are going to introduce a color parameter
// We want to have every shape have a color
function Shape(color) {
    // This points to the global object 
    // If we have it like "this.color = color;"
    this.color = color;
  }
  
  Shape.prototype.duplicate = function () {
    console.log("duplicate");
  };
  
  function Circle(radius, color) {
    // Using the call function and setting this  as the arg followed by color
    // 1. This is how we accomplish not setting a color to the global object
    // This has two parameters now
    Shape.call(this, color); // Calls the Shape(color)
    // If we don't have this it will point to the global object
    // This global object is in the browser window for example
    this.radius = radius;
  }
  
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
  
  Circle.prototype.draw = function () {
    console.log("draw");
  };
  
  const s = new Shape();
  // 2. We can now set the second parameter that is needed by the Circle()
  const c = new Circle(7, 'red');
  
  console.table(c)
  console.log(c)
  