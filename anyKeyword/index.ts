//any keyword will stop checking the particular value to cause type checking errors

let hero:any;

function getHero()
{
    return true;
    // return "thor";
}

hero = getHero();