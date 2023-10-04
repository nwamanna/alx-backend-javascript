/// <reference path='Teacher.ts'/>

namespace Subjects {
    export class Subject {
        public teacher: Teacher;

        constructor(arg: Teacher){
            this.setTeacher(arg);
        }

        setTeacher(teach: Teacher) {
            this.teacher = teach;
        }

    }
}