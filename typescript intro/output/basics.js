import { Student } from "./Student.model.js";
//data types-------------------------------------------------------------------
//primitive types: number, string, boolean
//more complex types: array, object
//function types, parameters
//primitives---------------
let age = 25;
age = 12;
let userName = "bijoy";
let isTrue = true;
// Note: null & undefined  also premitive type
// more complex type------------------------------------------------------
// array----
let hobbies;
hobbies = ['Sports', 'Çooking'];
// object---
let person;
person = {
    name: 'Max',
    age: 32
};
let people;
// Type inference -----------
let course = 'Angular';
//course = 1232   // error  cause type inference 
// union tyoe--------------
let course1 = "React";
course1 = 1234;
let name1;
let bmw = {
    model: '123',
    name: 'bmw12',
    modelYear: 2022
};
let cars;
//function & types ----------------------------------------------------
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
//Generics ------------------------------
function insertAtbeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtbeginning(demoArray, -1);
const stringArray = insertAtbeginning(['a', 'b', 'c'], 'd');
// classes & typescript................................................
const student = new Student('Max', 'strak', 32, ['Angular']);
student.enroll('React');
//student.courses  // can't access cause  courses is private
student.listCourses(); // Angular, React
let max;
max = {
    firstName: 'Max',
    age: 32,
    great() {
        console.log("hello there");
    },
    bye() {
        console.log('bye, take care');
    }
};
class Instructor {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    great() {
        console.log("hello students");
    }
    bye() {
        console.log("bye students");
    }
}
// Enums ------------------------------------------
var Rtype;
(function (Rtype) {
    Rtype[Rtype["Success"] = 0] = "Success";
    Rtype[Rtype["Failure"] = 1] = "Failure";
    Rtype[Rtype["Unathenticated"] = 2] = "Unathenticated";
    Rtype[Rtype["Forbidden"] = 3] = "Forbidden";
})(Rtype || (Rtype = {}));
const response1 = {
    status: 200,
    type: Rtype.Success,
    data: 'test'
};
console.log(response1); // {data: "test",status: 200, type: 0}
// Tuples -----------------------------------------------
let a = [3, 'hello', { p: 3 }];
let b = [4, 'world', { t: 1 }]; // tuples
//Function signature ----------------------------------------
let userDetails;
userDetails = (id, userInfo) => console.log(userInfo);
console.log(userDetails(1, { name: 'bijoy', age: 28 }));
