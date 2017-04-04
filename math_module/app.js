// Because we required 'mathlib.js', we can use the module.exports object from 'mathlib.js'
var MyModule = require('./mathlib'); // getting back an Object Constructor

//we use new beacuse myModule is an object Constructor
var math = new MyModule();

// Test variables
var a = 1;
var b = 3;

console.log(math.random(10, 15))
