function addTwo(num: number)
{
    // num.toUpperCase()
    return num +2;
}

function getUpper(val: string)
{

    return val.toUpperCase();
}

function signUp( name:string, email:string, isPaid:boolean)
{

}

let loginUser = (name:string, email:string, isPaid:boolean = false) => {}
loginUser("jags","jags@gmail.com" ); // perfectly fine function using its default value
loginUser("jags","jags@gmail.com" , true); // isPaid changes to true

addTwo(5);

// getUpper(4);
getUpper("opopo");

// signUp(1,2,3);
signUp("jagmeet" , "jagmeet@gmail.com" , true);

export {}