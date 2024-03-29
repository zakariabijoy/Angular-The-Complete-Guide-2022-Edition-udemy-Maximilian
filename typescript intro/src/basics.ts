import { Student } from "./Student.model.js";

//data types-------------------------------------------------------------------
//primitive types: number, string, boolean
//more complex types: array, object
//function types, parameters



//primitives---------------

let age:number = 25;

age = 12;

let userName: string="bijoy";

let isTrue:boolean = true;

// Note: null & undefined  also premitive type


// more complex type------------------------------------------------------

// array----
let hobbies: string[];
hobbies = ['Sports','Çooking'];

// object---
let person: {
    name:string;
    age: number;
};

person = {
    name:'Max',
    age: 32
};

let people: {
    name:string;
    age: number;
}[];


// Type inference -----------
let course = 'Angular';
//course = 1232   // error  cause type inference 

// union tyoe--------------

let course1: string |number ="React";
course1 = 1234;

let name1 : string | string[];

// type alias

type Car = {
    name: string;
    model: string;
    modelYear: number;
}

let bmw:Car = {
    model:'123',
    name: 'bmw12',
    modelYear: 2022
}

let cars : Car[];

//function & types ----------------------------------------------------

function add(a:number, b:number):number{
    return a+b;
}

function printOutput(value:any):void{
    console.log(value);
}

//Generics ------------------------------

function insertAtbeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtbeginning(demoArray,-1);
const stringArray = insertAtbeginning(['a','b','c'],'d');

// classes & typescript................................................



const student = new Student('Max', 'strak', 32, ['Angular']);
student.enroll('React');

//student.courses  // can't access cause  courses is private
student.listCourses(); // Angular, React


//interfaces,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

interface Human{
    firstName: string;
    age: number;

    great():void;

    bye: () => void;
}

let max : Human;

max ={
    firstName: 'Max',
    age: 32,
    great(){
        console.log("hello there");
    },
    bye(){
        console.log('bye, take care');
    }
}

class Instructor implements Human{
    firstName: string;
    age: number;

    constructor(firstName:string, age:number) {
        this.firstName = firstName;
        this.age = age;
    }

    great(): void {
        console.log("hello students");
    }
    bye():void{
        console.log("bye students");
    }
    
}


// Enums ------------------------------------------

enum Rtype {Success, Failure, Unathenticated, Forbidden}

interface APIResponse<T>{
    status: number;
    type: Rtype;
    data: T;
}

const response1: APIResponse<string> = {
    status: 200,
    type: Rtype.Success,
    data: 'test'
}

console.log(response1); // {data: "test",status: 200, type: 0}

// Tuples -----------------------------------------------

let a = [3,'hello', {p:3}];
let b:[number, string, object] = [4,'world',{t:1}];  // tuples

//Function signature ----------------------------------------

let userDetails : (id: number | string, userInfo:{
name:string,
age:number
}) => void;

userDetails = (id: number | string, userInfo:{
    name:string,
    age:number
    }) => console.log(userInfo);

console.log(userDetails(1, {name:'bijoy',age:28}));