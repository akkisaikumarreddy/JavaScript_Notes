console.log("Hello, world!");

console.error("This is an error Message");

console.warn("This is a Warning Message");

console.info('%cThis is a styled info message!', 'color: blue; font-size: 16px; font-weight: bold;');

console.table([{name:"Akki", age:30}, {name:"Sai", age:25}]);

console.time('timer1');
function loops() {
    for (let i=0; i<= 1000; i++) {

    }
}
loops()
console.timeEnd('timer1');

console.assert(5>10, "This assertion Failed");

console.group('User Information');
console.log('Name:Akki');
console.log('Age:30');
console.groupEnd();

console.count("countLabel");
console.count("countLabel");
console.count("countLabel");
console.count("countLabel");


function a() {
    b()
}
function b() {
    c()
}
function c() {
    console.trace()
}
a()