// Non-empty strings like "Hello" are truthy.
// Zero is a falsy value.

console.log(Boolean("Hello"));

console.log(Boolean(0));


// Everything With a "Value" is True
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean("HI"));


// Everything Without a "Value" is False
console.log(Boolean("")===false);  //true
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean());


// Booleans as Objects
var s1 = new Boolean(false);
console.log(s1);
console.log(typeof s1);
console.log(Boolean(s1));


// Boolean Primitives -  is a simple representation of true or false. This is the most commonly used Boolean type in JavaScript.
var isAvailable = true;
console.log(typeof isAvailable);

