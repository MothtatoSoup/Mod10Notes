
// // THIS is madness!!
// // THIS IS MINECRAAAAAFFFFTTTT!!!

// // this refers to the context whihc something is happening
// // in the global context, this refers to the global object (window in browsers, global in Node.js)
// // in a function it also refers to global object
// // in Methods, it refers to the object it is being called on
// // In a constructor this refers to an instance of teh object being created
// // In an object it refers to itself
// // in an event listener, this refers to the element it is bound too
// // In a class, this refers to the instance of the class being created
// // In an arrow function, this refers to the lexical scope in which the arrow function was defined

// // function changeText(){
// //     this.innerHTML = "clicked";
// // }
// // document.getElementById("button").addEventListener("click", changeText)



//--------------------------------------------------------------------



// // O B J E C T S
// // SYNTAX

// // "Object Constructor" messafe
// //let user = new Object() 
// // Object literal synatx
// //let user = {} 

// // Let user = {
// //     key: value, // key: value pairs
// //     // property-name: value, is the same thing
// // }


// //PRACTICE

// let user = {
//     name: "Karim", // Key name storing value Karim
//     age: 30, // Highly + strongly recomended that it ends with comma
//     "likes gambling": true, // Key that has multiple words in its name
// }
// console.log(user)

// // add properties
// user.isStudent = true; // object.key = value
// console.log(user)

// // add properties that hav multiple words
// user["Likes birds"] = true; // best practice if key is mult words
// console.log(user)

// // remove properties
// delete user.age // deletes the age key (and value)
// console.log(user)

// // empty object
// let newUser = {};

// // Set new property
// newUser["likes fortnite"] = true;

// // get 
// alert(newUser["likes fortnite"])

// // delete
// delete newUser["likes fortnite"]
// console.log(newUser)

// // if this meets a condition it will run a var check on apple in this case
// //let fruit = prompt("what fruit do you wanna buy?","apple");
// // let bag = {
// //     [fruit]: 5, //refrences outside var, the name will equal the value of the variable
// // }
// alert(bag.apple)

// let fruit = 'apple';
// let bag = {
//     [fruit + "Computers"]: 5, //concatinate
// }

// function makeUser(name, age){
//     return {
//         name: name, // or name,
//         age: age, // or age,
//     }
// };

// let anotherUser = makeUser("Marcus", 54);
// alert(anotherUser.name)

// // check if an object has a property
// let student = {
//     name: "Quint",
//     age: 21,
// }

// alert("age" in student); // check if the age key is in student
// alert("gamer" in student);

// // check for data in a variable
// let newStudent = {
//     age: 35,
// }
// let key = "age"
// alert(key in newStudent);

// // loop thru a object

// //Syntax:
// // for (key in object){
// //     // code to run
// // }

// let newNewUser = {
//     name: "Bianca",
//     age: 29,
//     isStudent: false,
// }
// console.log(newNewUser)

// for (let key in newNewUser){
//     //keys
//     alert(key)

//     //values
//     alert(newNewUser[key]);
// }



// PRACTICE
let usere = {};
usere.name = '____';
usere.surname = '_____';
usere.name = "E"
delete usere.name

//--------------------------------------------------------------------
// O B J E C T S take 2
// A collection of related data (Properties) and functions (methods) often reping real-world entity (person, movie, book, etc...)

const steve = {
    // OBJECT STATES
    // these properties describe the state of the object or it's char
    name: "Steve",
    Lname: "Minecraft",
    age: 55,
    isEmployed: false,
    // OBJECT BEHAVIORS (methods)
    sayHello: function(){
        console.log("I.... AM STEVE")
    },
    action: function(){
        console.log("CHICKEN JOCKEY!!!")
    },
}

console.log(steve.Lname);
steve.sayHello()
steve.action()

const spongeB = {
    name: "SpongeBob",
    Lname: "Squarepants",
    isEmployed: true,
    sayHello: function(){
        console.log("hahahahahahahaha")
    },
    action: function(){
        console.log("I am making a krabby patty")
    },
}
spongeB.sayHello()

// Dynamic Coding

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    displayInfo: function(){
        console.log(`${this.title} by ${this.author}`)
    },
}
book.displayInfo();




// ---------------------------------------------------------------------------------------------
// Hardcoding is very redudent so heres:
// C L A S S E S

class Book {
    constructor(title, author, genre){
        this.title = title; // whatever is passed into this, make it = to title
        this.author = author;
        this.genre = genre;
    }
    displayInfo(){
        console.log(`A ${this.genre} book called ${this.title} by ${this.author}`);
    }
}

let myBook = new Book("The Hobbit","J.R.R Tolkien","Fantasy");
myBook.displayInfo();

let mySecBook = new Book("Dune", "Frank Herbert" , "Sci-Fi");
mySecBook.displayInfo();


// Private properties
// #name  makes it privite properties
// can only change w/ in class




































































