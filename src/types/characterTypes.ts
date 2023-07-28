import { StaticImageData } from "next/image";

export interface CharacterTypes {
    id: number, 
    name: string, 
    placeholder: string, 
    img: StaticImageData, 
    direction: string,
    rule: string
}