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