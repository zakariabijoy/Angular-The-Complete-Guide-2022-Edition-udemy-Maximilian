export class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    constructor(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = this.courses;
    }
    enroll(courseName) {
        this.courses.push(courseName);
    }
    listCourses() {
        return this.courses.slice();
    }
}
