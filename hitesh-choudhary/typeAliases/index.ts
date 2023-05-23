type User = {
    name:string;
    email:string;
    isActive:boolean;
}

type Mystring = string ;

function createUser(user: User): User{
    return {name: "", email: "", isActive: false};
}

createUser({ name: "", email: "", isActive: false});

export {}