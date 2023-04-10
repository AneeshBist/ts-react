function addTwo(num:number):number{
    return num+2
    //return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name:string, email:string, isPaid:boolean){

}

const loginUser = (name:string,email:string,isPaid:boolean=false) => {

}

let myVal = addTwo(5)
getUpper("koli")
signUpUser("Tom", "tommyboy@welk.com", true)
loginUser("Jeff","jeffhungry@dlt.com")

function getValue(myVal:number){
    if(myVal>5){
        return true
    }
    return "yeah, OK."
}

const getHello = (s:string):string => {
    return ""
}

//const heros = ["thor","batman","hawkeye"]
const heros = [1,2,3]
heros.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}