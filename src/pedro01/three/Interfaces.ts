import { HairColor } from "./Enums";

export interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

export interface Props {
    name: string;
    age: number;
    email: string;
    getName?: (name:string) => string;
    hairColor: HairColor
}