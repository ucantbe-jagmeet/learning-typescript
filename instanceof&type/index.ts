
function logValue ( x : string | Date)
{
    if( x instanceof Date)
    {
       console.log(x.toUTCString());
    }
    else
    {
        console.log(x.toUpperCase());
        
    }
}


type Fish = { swim : () => void};
type Bird = { fly : () => void};

function isFish( pet : Fish | Bird): pet is Fish
{
     return (pet as Fish).swim !== undefined ;
}
// from the line 21 pet is identified truely as a fish which means it only gives true and false value but when we typecast pet is Fish in line 19 , type of pet will be become fish  
// in line 30 pet is defined as fish (after we type caste the method) 

function getFood( pet : Fish | Bird)
{
    if(isFish(pet))
    {
        pet 
        return "Fish Food";
    }
    else
    {
        pet
        return "Bird Food";
    }
}