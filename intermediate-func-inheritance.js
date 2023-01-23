// The extend function is what we call intermediate inheritance
// This allows us to use the constructor to extend what is available
function Shape(color) {
    // This points to the global object 
    // If we have it like "this.color = color;"
    this.color = color;
  }
  
  Shape.prototype.duplicate = function () {
    console.log("duplicate");
  };
  
  function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Circle.prototype.constructor = Circle;
  }
  
  // We define a constructor
  function Circle(radius, color) {
    Shape.call(this, color);
  
    this.radius = radius;
  }
  
  // We extend the Circle with the Shape
  extend(Circle, Shape)
  
  // This is a little bit noisy for setting up the proto chain why?
  // Circle.prototype = Object.create(Shape.prototype);
  // Circle.prototype.constructor = Circle;
  
  // So let's refactor these these two lines below into a new function we can use
  // We can use intermediate inheritance by extending
  // The two parameters are both capitilized becuase we are expecting constructors
  // Move these lines below above the Circle constructor
  // function extend(Child, Parent) {
  //   Child.prototype = Object.create(Parent.prototype);
  //   Circle.prototype.constructor = Circle;
  // }
  
  
  Circle.prototype.draw = function() {
    console.log('draw');
  }
  
  function Square(size) {
    this.size = size;
  }
  
  extend(Square, Shape);
  
  // We follow the same pattern that we used up top for the refactor
  // Square.prototype = Object.create(Shape.prototype);
  // Square.prototype.constructor = Square;
  
  const s = new Shape();
  const c = new Circle(1, 'red');
  
  const sq1 = new Square(11);
  console.table(sq1);
  const sq2 = new Square(15);
  console.table(sq2)
  
  const sq3 = new Square(22);
  // console.table(sq3);
  