function addTwo(num:number):number 
{
    // return true ; this will show error
    return num+2; // this will always return the number value
}
addTwo(4);

function getValue(val:number) //:boolean                         // when the function is returning is returning is more than one type
{
    if(val > 5)
    {
        return true;
    }
    return "200 ok";
}

const getHello = (s:string):string => {
    return "";

}


const heros = ["thor", "Spoidermon", "superman"];
// const hero = [ 1, 2, 3];

heros.map((hero):string => {

    return 'hero is ${hero}';

})

function consoleError(errmsg:string):void
{
    console.log(errmsg);    
    // return "";
}

function handleError(errmsg:string) :never
{
    throw new Error(errmsg);    
    // return "";
}



export {}