const score: Array<number> = []
const names: Array<string> = []

function identityOne(val:boolean|number): boolean|number{
    return val
}

function identityTwo(val:any):any {
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}

identityThree(true)

function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand:string,
    type:number
}

//identityFour<Bottle>("help",23)

function getSearchProduct<T>(product: T[]):T{
    // some DB operation
    const myIndex = 3
    return product[myIndex]
}

const getMoreSearchProducts = <T,>(product:T[]):T => {
    const myIndex = 4
    return product[myIndex]
}

interface Database{
    connection: string,
    username:string,
    password:string
}

function anotherFunction<T,U extends Database>(val1:T,val2:U):object{
return {val1,val2}
}

//anotherFunction(3,34)

