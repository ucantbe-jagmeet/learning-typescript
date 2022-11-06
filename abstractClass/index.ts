// abstract class can't have objects , it can be inherited in other class

abstract class TakePhoto 
{
        var = 10;
        constructor (
            public cameraMode: string ,
            public filter : string,
        ){}

        abstract getSepia():void 
        getReelTime():number{
            // some complex calculation
            return 8;
        }
        

}

// const jags = new TakePhoto("test", "test");

class Instagram extends TakePhoto
{
    constructor(
        public cameraMode:string ,
        public filter: string,
        public burst : number,
    ){
        super(cameraMode, filter)
    }

    getSepia():void
    {
        console.log("Sepia");
    } 
}

const jags = new Instagram("test", "test" , 9);


jags.getReelTime();