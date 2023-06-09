import {FC,ChangeEvent, useState} from 'react';

interface Props {
    name: string;
    age: number;
    email: string;
    getName?: (name:string) => string;
    hairColor: HairColor
}

export enum HairColor {
  Blonde = "your hair is blonde, great",
  Brown = "nice hair color",
  Grey = "that's some color of hair",
}

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

