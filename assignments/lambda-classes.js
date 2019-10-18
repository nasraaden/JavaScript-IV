// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello, my name is ${this.name} and I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes),
        this.specialty = instructorAttributes.specialty,
        this.favLanguage = instructorAttributes.favLanguage,
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject){
        return `Today, we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student.name} received a perfect score on ${subject}.`
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground,
        this.className = studentAttributes.className,
        this.favSubjects = studentAttributes.favSubjects
    }
    listsSubject(){
        return this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(student, subject){
        return `${student.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(student, subject){
       return `${student.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes),
        this.gradClassName = pmAttributes.gradClassName,
        this.favInstructor = pmAttributes.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, '@channel time for stand​​ up!​'.`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

//
//Instructors
const instructorOne = new Instructor({
    name: "Lily",
    age: 28,
    location: "Austin",
    specialty: "back-end",
    favLanguage: "Java",
    catchPhrase: "howdy"
});

const instructorTwo = new Instructor({
    name: "Logan",
    age: 45,
    location: "LA",
    specialty: "front-end",
    favLanguage: "JavaScript",
    catchPhrase: "sup dudes"
});

//Students
const studentOne = new Student({
    name: "Jamie",
    age: 20,
    location: "Seattle",
    previousBackground: "college student",
    className: "Web25",
    favSubjects: ["C++", "HTML"]
})

const studentTwo = new Student({
    name: "John",
    age: 48,
    location: "Minneapolis",
    previousBackground: "teacher",
    className: "Web25",
    favSubjects: ["CSS", "Javascript"]
})


//Project Managers
const pmOne = new ProjectManager({
    name: "Brianna",
    age: 26,
    location: "Boston",
    specialty: "debugging",
    favLanguage: "Spanish",
    catchPhrase: "get that bug!",
    gradClassName: "Web16",
    favInstructor: "Lily"
})

const pmTwo = new ProjectManager({
    name: "Bennet",
    age: 37,
    location: "Salt Lake City",
    specialty: "answering questions",
    favLanguage: "C#",
    catchPhrase: "get that bug!",
    gradClassName: "Web15",
    favInstructor: "Logan"
})

// Instructor 1
console.log(instructorOne.demo("flexbox"));
console.log(instructorOne.grade(studentOne, "Javascript"));

// Instructor 2
console.log(instructorTwo.demo("array methods"));
console.log(instructorTwo.grade(studentTwo, "HTML"));

// Student 1
console.log(studentOne.listsSubject());
console.log(studentOne.PRAssignment(studentOne, "Responsive Design I"));
console.log(studentOne.sprintChallenge(studentOne, "Advanced CSS"));

// Student 2
console.log(studentTwo.listsSubject());
console.log(studentTwo.PRAssignment(studentTwo, "User Interface I"));
console.log(studentTwo.sprintChallenge(studentTwo, "JavaScript Fundamentals"));

// Project Manager 1
console.log(pmOne.standUp("#web25_brianna"))
console.log(pmOne.debugsCode(studentOne, "Javascript classes"));

// Project Manager 2
console.log(pmTwo.standUp("#web25_bennet"))
console.log(pmTwo.debugsCode(studentTwo, "constructor functions and prototypes"));



