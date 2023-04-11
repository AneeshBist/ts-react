type Userdt = {
    readonly _id:string;
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: number
}

let myUser: Userdt = {
    _id:"2345",
    name:"Tom",
    email:"timmwp@ret.com",
    isActive:false,
}

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    carddate:string
}
type cardDetails = cardNumber & cardDate & {cvv:number}

myUser.isActive = true
//myUser._id="sdfsd"
