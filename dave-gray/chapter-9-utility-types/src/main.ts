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