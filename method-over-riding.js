// Method Overriding  
// We overwrite a method that is defined in the base object
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Circle;
  }
  
  function Shape() {
  }
  
  // This implementation in a parent object sometimes
  // Might not work in our use case we use overriding to handle this
  Shape.prototype.duplicate = function () {
    console.log("duplicate");
  };
  
  function Circle() {
  }
  
  Shape.prototype.duplicate = function() {
    console.log('duplicate - calling from the parent');
  }
  
  function Circle() {
    
  }
  
  extend(Circle, Shape);
  
  // Important to put this after extending the Circle object
  // At this point we are resetting the prototype
  // If we move this block of code above the extend 
  // The implementation will dissapear
  Circle.prototype.duplicate = function () {
    // We can call the parent like this
    Shape.prototype.duplicate();
    // If we need to use this then we do it in this manner
    Shape.prototype.duplicate.call(this);
    console.log("duplicate circle being called from the child");
  };
  
  const c = new Circle();
  
  // This works because when we access a method or a property on an object
  // JS engine walks up the prototype and picks the first implementation
  // console.table(c.duplicate(Shape))
  console.table(c.duplicate(Circle));
  
  