abstract class TakePhoto{
    constructor(
        public camerMode:string,
        public filter:string
    ){}

    abstract getSepia():void
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:string,
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("received sepia filter");
        
    }
}

const Jimmy = new Instagram("test","none","hola")