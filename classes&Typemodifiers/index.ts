// class USer { 
//     email : string
//     name : string
//     private readonly city : string = "Jaipur"
//     constructor ( email: string, name: string)
//     {
//         this.email = email;
//         this.name = name;
//     }

class USer { 
    readonly city : string = "Jaipur"
    constructor ( 
        public email: string,
        public name: string,
        // private userId : string
        ){}

       }

const jags = new USer( "jags@gmail.com", "jags");
//jags.city // this will access the city when its access modifier is public and when it changes to private it shows error that means it is not accessible outside the class 
