// We want to extend HtmlSelectElement and implement a render()
// Polymorphism in action
// We should be able to define an a new HtmlSelectElement
// - We want to initialize this with an array of three items [item1, item2, item3]
// We should then be able to call that render method and it will display in the console
{
  /* <selelct>
    <option>1</option>
    <option>2</option>
    <option>3</option>
</selelct> */
}

// We also what to render the url for a fake image
{
  /* <img src="http://" /> */
}
// We also want to be able to call a render method for an image
// The image should be clickable, and have the prototype of focus
// Goal: To have many forms of the render()

function HtmlElement() {
  // Parent
  this.click = function () {
    console.log("clicked html element");
  };
}

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function () {
    return `
      <select>${this.items
        .map(
          (item) => `
      <option>${item}</option>`
        )
        .join("")}
      </select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// We have a constructor that recieves a src as a parameter
function HtmlImageElement(src) {
  // Here we are setting the src
  this.src = src;

  // Here we are defining the render method
  this.render = function () {
    // We are using a template string we can pass strings in a string (ES6)
    // We use "$" to pass arguments and {whatever is placed in here get placed at run time}
    // So what occurs here is that dynamically the string get placed at runtime
    return `<img src="${this.src}" />`;
    // Prior to ES6
    // return '<img src"' + this.src + '" />';
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.contructor = HtmlImageElement;

const s = new HtmlSelectElement();
console.log(s);
console.table(s);
const r = new HtmlImageElement();
console.log(r);
console.table(r);
