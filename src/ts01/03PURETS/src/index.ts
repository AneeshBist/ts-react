// class User {
//     public email:string
//     private name:string
//      readonly city:string = "Berlin"
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name;
//     }
// }

import { error } from "console"

class User {

    protected _courseCount  = 1

    readonly city:string = "Berlin"
    constructor(
        public email:string, 
        public name:string, 
        //private userId: string
        ){
    }
    private deleteToken(){
       console.log("token deleted")
    }
    get getAppleEmail():string{
        return `apple${this.email}`
    }
    get courseCount():number{
        return this._courseCount
    }
    set courseCount(courseNum){
        if (courseNum <=1){
            throw new Error("course count should be greater than 1")
        }
        this._courseCount = courseNum
    }

}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 1
    }
}

const Tim = new User("htt@wer.com","Tim")
//Tim.name 