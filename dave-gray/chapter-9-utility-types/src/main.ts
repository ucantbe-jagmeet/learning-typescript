// Utility types


//Partial 
interface Assignment{
    studentId : string;
    title : string;
    grade : number;
    verified? : boolean;
}

const updateAssignment = ( assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment =>{
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0,
}

const assignGraded : Assignment =  updateAssignment( assign1, {grade : 95})
console.log( assignGraded);


// Required and Readonly

const recordAssignment = ( assign: Required<Assignment>):Assignment =>{
    // send to database, etc
    return assign
}
const assignVerified : Readonly<Assignment> =  { ...assignGraded , verified:true}

// assignVerified.grade = 99
recordAssignment({ ...assignGraded, verified: true})

// Record

const hexColorMap : Record< string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = 'Sara' | 'Kelly'
type LetterGrades = 'A' | 'B'| 'C'| 'D' | 'U'

const FinalGrades: Record < Students, LetterGrades> = {
    Sara : "B",
    Kelly : "U",
}

interface Grades{
    assign1 : number;
    assign2 : number;
}

const gradeData: Record< Students, Grades> = {
    Sara: { assign1: 34, assign2: 55 },
    Kelly: { assign1: 45, assign2: 95 },
}

// pick and omit 
type AssignResult =  Pick< Assignment, "studentId" | "grade" >

const score: AssignResult = {
    studentId: "k123" ,
    grade: 85 ,
}


type AssignPreview = Omit < Assignment, "grade" | "verified">
const preview: AssignPreview = {
    studentId : "k123",
    title : "Final Project",
}

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract <LetterGrades, "A" | "B" >

// nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable < AllPossibleGrades >

//ReturnType
// type newAssign = { title:string , points:number}

const createNewAssign = ( title: string, points:number)  =>{
    return { title, points}
}

type newAssign = ReturnType< typeof createNewAssign>

const tsAssign: newAssign = createNewAssign( 'Utility types', 100)
console.log(tsAssign);

//Parameters
type AssignParams = Parameters < typeof createNewAssign>

const assignArgs: AssignParams = ['Generics', 100]
const tsAssign2 : newAssign = createNewAssign(...assignArgs)


// Awaited - help us with the ReturnType of a Promise
interface User{
    id:number;
    name:string;
    username:string;
    email:number;
}

const fetchUsers = async () : Promise< User[]> =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => {return res.json()})
    .catch(err=> {
        if(err instanceof Error) console.log(err.message);
    })
    return data
}

type FetchUsersReturnType = Awaited< ReturnType< typeof fetchUsers>>
fetchUsers().then(users => console.log(users))