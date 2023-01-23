// We always want to choose composition over inheritance
// This can be accomplished by mixins
// Let's look at some animals
// 1. Object literal syntax
// Let's create a mixin now
// Using a spread operator we can take all the sources
// Then turn those sources into an array []
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
  }
  
  const canEat = {
    eat: function() {
        this.hunger--;
        console.log('this animal is eating');
    }
  };
  
  const canWalk = {
    walk: function() {
        console.log('this animal is walking');
    }
  };
  
  // Let's add a new feature for a fish that can swim
  const canSwim = {
    swim: function() {
      console.log('swim');
    }
  };
  
  // 2. Now let's compose these objects together
  //  - A person can eat and also walk
  
  function Person() {}
  
  // We don't need a return value anymore "we can remove the const of newPerson"
  // Object.assign(Person.prototype, canEat, canWalk);
  mixin(Person.prototype, canEat, canWalk);
  
  // ES6 There is a new method where we can assign
  //      - This allows us to copy the properties and methods from one object to the another
  //      - We pass an empty object to the target with one or more sources
  // This new object now has a combination of these two objects
  // const person = Object.assign({}, canEat, canWalk); 
  // console.log(person);
  // console.table(person);
  // If we are using a constructor function we can still use this technique
  const person = new Person();
  console.log(person);
  console.table(person);
  
  function Goldfish() {
  
  }
  
  // Object.assign(Goldfish.prototype, canEat, canSwim);
  mixin(Goldfish.prototype, canEat, canSwim);
  const goldfish = new Goldfish();
  console.log(goldfish);
  console.table(goldfish);
  
  
  