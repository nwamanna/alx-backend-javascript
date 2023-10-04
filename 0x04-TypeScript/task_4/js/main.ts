/// <reference path='./subjects/React.ts'/>
/// <reference path='./subjects/Cpp.ts'/>
/// <reference path='./subjects/Java.ts'/>


export const java = Subjects.java;
export const cpp = Subjects.cpp;
export const react = Subjects.react;

export const obj: Subjects.Teacher = {
    firstName: "Adam",
    lastName: "Bimbo",
    experienceTeachingC: 10,
}


console.log("C++");
const newC = new cpp(obj);

newC.getRequirements();
newC.getAvailableTeacher();

console.log("Java");
const newJava = new java(obj);

newJava.getRequirements();
newJava.getAvailableTeacher();

console.log("React");
const newReact = new react(obj);

newReact.getRequirements();
newReact.getAvailableTeacher();