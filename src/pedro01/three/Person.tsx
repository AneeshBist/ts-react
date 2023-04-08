import {FC,ChangeEvent, useState} from 'react';
import { Props } from './Interfaces';

export const Person:FC<Props> = (props) => {

  const [country,setCountry] = useState< string | null>("")

  type NameType = "cat" | "dog" | "fish"
  const petName: NameType = "fish"

  const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{setCountry(event.target.value)}

  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>

      <input type="text" placeholder='Write your country...'
      onChange={handleChange}/>      
      <div>{country}</div>

      {props.hairColor}
      <div>Pet: {petName}</div>
    </div>
  );
}

