interface User {
    readonly dbId: number,
    uname: string,
    email:string,
    userId: number
    googleId?:string,
    //startTrail: ()=>string
     startTrail():string,
     getCoupon(couponname:string, val:number):number
}

interface User{
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "fresher"
}

const John: Admin = {dbId:23, uname:"john", email:"john@gmail.com", userId:234,
startTrail: ()=>{return "trail started"},
githubToken: "werwersdvc234sdfs",
getCoupon: (name:"will20", off:10)=>{
    return 10
},
role: "fresher",

}

export {}