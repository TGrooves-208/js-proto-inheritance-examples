// Polymorphism example
// Reimplementing a method in a child object
// Poly - means many, Morph - means form
// Very powerful technique
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Circle;
  }
  
  function Shape() {
  }
  
  Shape.prototype.duplicate = function () {
    console.log("duplicate");
  };
  
  function Circle() {
  }
  
  extend(Circle, Shape);
  
  Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
  }
  
  // 1. Create a new Square function or in JS an {}
  function Square() {
    
  }
  
  // Extend the Shape on the Square
  extend(Square, Shape);
  
  // Then we are going to redefine this duplicate method on the Square object
  Square.prototype.duplicate = function() {
    console.log('duplicate square');
  }
  
  // So we have many forms of the duplicate method
  // Let's imagine we have an array of shape objects
  const shapes = [
    new Circle(),
    new Square()
  ];
  
  // We can now iterate over this array
  // Depending on the shape object
  // A different shape or duplicate method will be called
  // If it is a Circle a different implementation will be called
  // If it is a Square a different implementation will be called
  // Code this way
  for (let shape of shapes) {
    shape.duplicate();
  }
  
  // This is good to know because of legacy code that exists
  // Before OOP in JS we used to need to write code like this
  // This is an example and does nothing
  // for(let shape of shapes) {
  //   if(shape.type === 'circle') 
  //   duplicateCircle(); // Calling the function
  //   // In OOP we encapsulate our variables and functions into objects
  //   else if (shape.type === 'square')
  //   duplicateSquare();
  //   else
  //   duplicateShape();
  // }
  
  
  
  