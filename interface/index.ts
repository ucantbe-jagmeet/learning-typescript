// interface is like a more like a class but loosely form of class

interface User 
{
    readonly dbId: number,
    email : string,
    userId : number,
    googleId?: string,
    // startTrail?:() =>string   <method 1>
    startTrail(): string,  // method 2
    getCoupon( couponName: string, value : number): number
}

const jagmeet: User = {dbId:22, email: "jag.com", userId: 786, startTrail: () => {return "trail started"} , getCoupon: (name: "jagmeet", off: 10) => {return 10;}}

jagmeet.email = "coolboy@gmail.com";
