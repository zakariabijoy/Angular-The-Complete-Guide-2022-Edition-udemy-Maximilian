//data types-------------------------------------------------------------------
//primitive types: number, string, boolean
//more complex types: array, object
//function types, parameters
//primitives---------------
var age = 25;
age = 12;
var userName = "bijoy";
var isTrue = true;
// Note: null & undefined  also premitive type
// more complex type------------------------------------------------------
// array----
var hobbies;
hobbies = ['Sports', 'Çooking'];
// object---
var person;
person = {
    name: 'Max',
    age: 32
};
var people;
// Type inference -----------
var course = 'Angular';
//course = 1232   // error  cause type inference 
// union tyoe--------------
var course1 = "React";
course1 = 1234;
var name1;
var bmw = {
    model: '123',
    name: 'bmw12',
    modelYear: 2022
};
var cars;
//function & types ----------------------------------------------------
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
