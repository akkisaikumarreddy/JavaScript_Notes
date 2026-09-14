// Creation Using Object Literal

var obj = {
    name: "Akki",
    age: 23,
    job:"Developer"
};
console.log(obj);


// Creation Using new Object() Constructor
var obj = new Object();
obj.name= "Sai",
obj.age= 21,
obj.job= "Developer"

console.log(obj);


// Creation using Object.create() Method
var prototypeObj = {country : "India"};
var obj = Object.create(prototypeObj);
obj.name = "Sai";
obj.age = 21;
obj.job = "Developer";

console.log(obj);


// Object Methods
let emp = {
    eName: "Akki",
    eId: 123,
    ePassword: "456789"
};

console.log(emp);

// Keys
console.log(Object.keys(emp));

// Values
console.log(Object.values(emp));

// Entries
console.log(Object.entries(emp));

// isFrozen
// Object.freeze(emp);
console.log(Object.isFrozen(emp));


// isSealed
console.log(Object.isSealed(emp));


// fromEntries
let b = Object.fromEntries(Object.entries(emp).filter(([key])=>key !== "ePassword"))
console.log(b)


// Important Object Methods
let person = {
    pName: "Sai"
};

function greetings(greet,city){
    console.log(`${greet},i am ${this.pName} and i am from ${city}`);
}


// call Method
greetings.call(person,"Hii","Kadapa")

// Apply Method
greetings.apply(person,["Hello","Nellore"])

// Bind Method
const x = greetings.bind(person,"Hey","Bangalore")
x()


// Basic Operations on JavaScript Objects

// 1. Accessing Object Properties
var obj = {
    name: "Akki",
    age: 23,
    job: "Developer"
};

console.log(obj.name);  // Using Dot Notation

console.log(obj["age"]) // Using Bracket Notation


// 2. Modifying Object Properties
console.log(obj);

obj.age = 30;
console.log(obj);

obj.name = "Sai"
console.log(obj);


// 3. Adding Properties to an Object
obj.color = "Red";
console.log(obj);


// 4. Removing Properties from an Object
delete obj.color;

console.log(obj);


// 5. Checking if a Property Exists
console.log('color' in obj);
console.log(obj.hasOwnProperty("name"));


// 6. Iterating Through Object Properties
for (var key in obj){
    console.log(key + ":" + obj[key]);
}


//7. Merging Objects
var obj1 = {
    name:"Akki"
};

var obj2 = {
    age:23
};

var obj3 = {
    id:"45678"
};

let obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);


// 8. Object Length
console.log(Object.keys(obj4).length);

