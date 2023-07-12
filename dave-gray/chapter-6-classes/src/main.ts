class Coder {

    secondLang!:string

    constructor(
        public readonly name :string ,
        public music:string,
        private age:number,
        protected lang:string = 'Typescript'
    ) {
            this.name = name   
            this.music = music   
            this.age = age   
            this.lang = lang   
    }

    public getAge(){
        return `Hello , i am ${this.age}`
    }
}

const Dave = new Coder( 'Jagmeet', 'Rock', 23)
// console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);


class webDev extends Coder{
    constructor( 
        public computer : string,
        name :string ,
        music:string,
        age:number,
    ){
        super( name , music, age)
        this.computer = computer
    }

    public getLang(){
        return ` I write ${this.lang}`
    }
}
