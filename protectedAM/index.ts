class User {

    protected _courseCount = 1;

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

class SubUser extends User{
    isFamily : boolean = true;

    changecourseCount()
    {
        this._courseCount = 4; // protected modifiers are accesible to inherted class only
    }

}


const jags = new User ( "jags@gmail.com", 'jags');

// jags.deleteToken();
// jags.courseCount(5);
// console.log(jags.courseCount);





