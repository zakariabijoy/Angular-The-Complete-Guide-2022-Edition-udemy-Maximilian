export class Student{
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(public firstName:string, public lastName:string, public age: number, private courses:string[]) {
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = this.courses;
    }

    enroll(courseName: string){
        this.courses.push(courseName);
    }

    listCourses(){
        return this.courses.slice();
    }
}