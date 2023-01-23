function HtmlElement() {
    // Parent
    this.click = function() {
        console.log('clicked html element');
    }
  }
  
  // Defined on the prototype of the HtmlElement
  HtmlElement.prototype.focus = function() {
    console.log('focused');
  }
  
  // ES6 allows us to initialize the parameters
  function HtlmSelectElement(items = []) {
    // Prior to ES6 we would need to do the following below
    // this.items = items || [];
    this.items = items;
  
    // Method 1
    this.addItem = function(item) {
        this.items.push(item);
    }
  
    // Method 2
    this.removeItem = function(item) {
      // This deletes an item at a given position in the index
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
  
  // This is the how the magic happens
  // We set the prototype to a new "instance" of HtmlElement() object
  // The example below will not work because we are
  // 1. Creating a new object 
  // 2. Setting the prototype of the object to the HtmlElement
  // 2.1 - Reason: baseHtmlElement (an object that only has 1 method "focus()"
  // baseHtlmSelectElement an empty {} that is linked to baseHtmlElemt (as it's prototype)
  // HtmlElement.prototype = Object.create(HtmlElement.prototype);
  HtmlElement.prototype = new HtmlElement();
  HtlmSelectElement.prototype.constructor = HtlmSelectElement;
  // We should have also set the constructor if this is being accomplished dynamically
  // new HtlmSelectElement.prototype.constructor();
  // new HtlmSelectElement() // In this object we have the click , prototype with focus
  
  const s = new HtlmSelectElement();
  // Let's inspect this to see what is going on
  s
  console.table(s);
  // Once we have implemented correct we then have all of the goodness
  // Just type c. - a list of available functions will be given
  