const User = {
    name: "Billy",
    email: "hirebilly@gmail.com",
    isActive: true,
}

function createUser({name:string, isPaid:boolean}){}

let newUser = {name:"Tom", isPaid:true, email:"werty@ggm.com"}
createUser(newUser)

function createCourse():{name:string, price:number}{
    return {name:"ReactJS", price:450}
}

//.............................................

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser1(user: User):User{
    return {name:"", email:"", isActive:true}
}

createUser1({name:"", email:"", isActive:true})