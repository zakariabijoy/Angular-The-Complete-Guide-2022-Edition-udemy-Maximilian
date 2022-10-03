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
// classes & typescript................................................
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = this.courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Max', 'strak', 32, ['Angular']);
student.enroll('React');
//student.courses  // can't access cause  courses is private
student.listCourses(); // Angular, React
var max;
max = {
    firstName: 'Max',
    age: 32,
    great: function () {
        console.log("hello there");
    },
    bye: function () {
        console.log('bye, take care');
    }
};
var Instructor = /** @class */ (function () {
    function Instructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    Instructor.prototype.great = function () {
        console.log("hello students");
    };
    Instructor.prototype.bye = function () {
        console.log("bye students");
    };
    return Instructor;
}());
// Enums ------------------------------------------
var Rtype;
(function (Rtype) {
    Rtype[Rtype["Success"] = 0] = "Success";
    Rtype[Rtype["Failure"] = 1] = "Failure";
    Rtype[Rtype["Unathenticated"] = 2] = "Unathenticated";
    Rtype[Rtype["Forbidden"] = 3] = "Forbidden";
})(Rtype || (Rtype = {}));
var response1 = {
    status: 200,
    type: Rtype.Success,
    data: 'test'
};
console.log(response1); // {data: "test",status: 200, type: 0}
// Tuples -----------------------------------------------
var a = [3, 'hello', { p: 3 }];
var b = [4, 'world', { t: 1 }]; // tuples
//Function signature ----------------------------------------
var userDetails;
userDetails = function (id, userInfo) { return console.log(userInfo); };
console.log(userDetails(1, { name: 'bijoy', age: 28 }));
