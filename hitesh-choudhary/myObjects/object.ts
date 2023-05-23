const User = {
    name : "Jagmeet",
    email : "jagmeetsingh@gmail.com",
    isActive : true
}

function createUser( {name: string , isPaid:boon}){}
let newUser = { name: "Jagmeet", isPaid:false, email:"jagmeetsingh2gmail.com"};

createUser(newUser)

function createCourse():{name: string , price: number}{

    return { name: "ReactJS", price : 399};
}
// function is return an object
// first () is function parameter , second{} is return type and third is definition

export {}