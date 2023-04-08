import React from 'react'

const TypeScriptFirst = () => {
   const name: string = "Billy";
   const age: number = 30;
   const isMarried: boolean = false;

  const getName = (name:string):number => {
    if(name === "Billy"){
      return 77
    }
    else{
      return 0
    }
  }

   return (
     <div className="App">
       {name}
       {age}
       {isMarried}
       
     </div>
   );
}


export default TypeScriptFirst
