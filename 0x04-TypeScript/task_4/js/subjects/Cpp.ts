/// <reference path='Teacher.ts'/>

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export const cpp = class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return "No available teacher";

        }


    }
}



// export const obj: Subjects.Teacher = {
//     firstName: "Adam",
//     lastName: "Bimbo",
//     experienceTeachingC: 10,
// }
// export const cpp = 1;