//data types-------------------------------------------------------------------
//primitive types: number, string, boolean
//more complex types: array, object
//function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
//Generics ------------------------------
function insertAtbeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtbeginning(demoArray, -1);
var stringArray = insertAtbeginning(['a', 'b', 'c'], 'd');
