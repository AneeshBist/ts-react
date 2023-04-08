import React,{FC} from 'react'
import {Person, HairColor} from './Person'

const TypeScriptTwo:FC = () => {



  return (
    <div>
      <Person name="Billy" age={20} email="something@gog.com" hairColor={HairColor.Blonde}/>
    </div>
  )
}


export default TypeScriptTwo
