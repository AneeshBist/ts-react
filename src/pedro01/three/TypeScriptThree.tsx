import React,{FC,createContext} from 'react'
import {Person} from './Person'
import { HairColor } from './Enums';
import { AppContextInterface } from './Interfaces';

const AppContext = createContext<AppContextInterface | null>(null)

const TypeScriptThree:FC = () => {
    const contextValue:AppContextInterface = {
    name:"Billy",
    age:20,
    country:"Canada",
  }
  return (
    <AppContext.Provider value={contextValue}>
    <div>
      <Person name="Billy" age={20} email="something@gog.com" hairColor={HairColor.Blonde}/>
    </div>
    </AppContext.Provider>
  )
}


export default TypeScriptThree
