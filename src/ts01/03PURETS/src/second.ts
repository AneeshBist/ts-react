import { log } from "console"

interface TakePhoto1{
    cameraMode: string 
    filter:string
    burst: number
}

interface Story1{
    createStory():void
}

class Instagram1 implements TakePhoto1 {
    constructor (
        public cameraMode: string,
        public filter:string,
        public burst:number,
    ){}
}

class Youtube1 implements TakePhoto1, Story1 {
    constructor (
        public cameraMode: string,
        public filter:string,
        public burst:number,
        public short:string,
    ){}

    createStory(): void {
        console.log("story created");
        
    }
}