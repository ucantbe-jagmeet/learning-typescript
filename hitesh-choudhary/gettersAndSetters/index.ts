class User {

    private _courseCount = 1;

    readonly city : string = "jaipur"
    constructor (
        public email : string,
        public name : string,
    ){}


    private deleteToken()
    {
        console.log("token Deleted");
        
    }

    get getappleEmail():string 
    {
        return ` Apple ${this.email}`;
    }

    get courseCount():number 
    {
        return this._courseCount;
    }
    
    set courseCount(courseNum)
    {
        if (courseNum <= 1) 
        {
            throw new Error("course count should be more than 1")    
        }

        this._courseCount = courseNum ;
    }
}

const jags = new User ( "jags@gmail.com", 'jags');

// jags.deleteToken();
// jags.courseCount(5);
console.log(jags.courseCount);
