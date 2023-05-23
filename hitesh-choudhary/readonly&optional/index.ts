// readonly keyword doesn't allow any one to change the variable data by any one 
// optional keyword is used to make any statement not compulsory to filled
type User = {
    readonly _id: string;
    name : string;
    email: string;
    isActive: boolean;
    credcardDetails?: number; // question mark make this element optional
}

let myUser: User = {
    _id: "1231",
    name: "sa",
    email: "higaj",
    isActive: true,
}

type cardNUmber = {
    cardnumber: string;
}

type cardDate ={
    cardDate:string;
}

type cardDetails = cardNUmber & cardDate & {
    cvv: number ;
}


myUser.email = "jagm@gmail.com";
// myUser._id = "dasa";  <this will show error as _id is not changable by anyone>