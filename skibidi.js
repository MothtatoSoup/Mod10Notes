// this refers to the context whihc something is happening
// in the global context, this refers to the global object (window in browsers, global in Node.js)
// in a function it also refers to global object
// in Methods, it refers to the object it is being called on
// In a constructor this refers to an instance of teh object being created
// In an object it refers to itself
// in an event listener, this refers to the element it is bound too
// In a class, this refers to the instance of the class being created
// In an arrow function, this refers to the lexical scope in which the arrow function was defined
function changeText(){
    this.innerHTML = "clicked";
}
document.getElementById("button").addEventListener("click", changeText)