// ES6 IIFE

// (() => {
//     let time = new Date() ;
//     console.log(time);
// }) ();

// Operator precedence

// var sum = 5 + 5 * 3;
// console.log(sum)



//goes out to the internet and looks for value

// var a;
// a = 0;

// if(a){
//     console.log('We found a')
// } else {
//     console.log('not available')
// }

// OBJECTS


var person = new Object();

person["firstName"] = "John";
person["lastName"] = "Doe";

var firstNameProperty = "firstName";

console.log(person);
console.log(person["firstName"])


// OBJECTS SIMPLE FORM

// var person = new Object();

// person.firstName = "Jane"
// person.lastName = "Doe"

// console.log(person)

// THE DOT

var person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        city: "new york",
        street: "11 main St.",
        state: "MN"
    }
}

console.log(person)


// OBJECT SHORTHAND

