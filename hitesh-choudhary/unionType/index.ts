// union type is used when we are not sure which type of data will come as input/output

let score:number | string = 33;

score = 44;

score = "55";

type User = {
    name:string;
    id: number;
}

type Admin = {
    username:string;
    id: number;
}


// ---------------##--------------------

getDbId(3);
getDbId("3");

let jagmeet: User | Admin ={ name: "jagmeet", id: 6575};
jagmeet = { username: "monu" , id: 6575};

function getDbId(id: number | string){
    
    // id.toLowerCase(); <here squiggly line will come up because type of id is both number and string>
    // there are two possible outcome that is number and string 

    if(typeof id == "string")
    {
        id.toLowerCase();
    }
}

// Arrays

const data : number[] = [ 1, 2, 3, 4];
const data2 : string[] = [ '1', '2', '3', '4'];
const data3 : string[] | number[] = [ '1', '2', '3', '4'];  // either all numbers are all strings should be taken as element of data
const data4 : (string | number)[] = [ '1', 2, '3', '4']; // both numbers and string can be part of array


// let pi:3.14 = 3.14; 
// pi = 3.15;

// let seatAllotment: "aisle" | "window" | "middle";
// seatAllotment = "window"
// seatAllotment = "crew"




export {}











