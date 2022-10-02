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


// more complex type--------------

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


// Type inference --------------------------
let course = 'Angular';
//course = 1232   // error  cause type inference 