
let score : number|string = 33

score = 44
score ="55"

type User = {
    name: string;
    id:number
}

type Admin = {
    adminname: string;
    id:number
}

let Joe: User | Admin = {name:"Joe", id:223}

Joe = {adminname:"J1", id:223}

// function getDBId(id:number|string){
//     console.log(`DB id is: ${id}`);
    
// }
getDBId(3)
getDBId("3")

function getDBId(id:number|string){
    if(typeof id === "string"){
        id.toLocaleLowerCase()
    }
}

//array

const data0: number[] = [1,2,3]
const data1: string[] = ["1","2","3"]
const data2: (number|string|boolean)[] = [1,2,3,"4",true]

let pi:3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"

export {}