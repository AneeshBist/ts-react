"use strict";
// class User {
//     public email:string
//     private name:string
//      readonly city:string = "Berlin"
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Berlin";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 1;
    }
}
const Tim = new User("htt@wer.com", "Tim");
//Tim.name 
