interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

type  Employee = TeacherInterface | DirectorInterface;

class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home";
    }
    getCoffeeBreak() {
        return "Getting a coffee break";
    }
    workDirectorTasks() {
        return "Getting to director tasks";
    }

}

class Teacher implements TeacherInterface {
    workFromHome() : string {
        return "Cannot work from home";
    }
    getCoffeeBreak() : string {
        return "Cannot have a break";
    }
    workTeacherTasks() : string {
        return "Getting to work";
    }

}

function createEmployee(salary: string | number) {
    if (typeof salary === 'number' && salary < 500 ) {
        return new Teacher;
    } else {
        return new Director;
    }
}

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));

function isDirector(employee: Employee): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Employee) {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    } else{
        employee.workTeacherTasks();
    }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));


type Subjects = "Math" | "History";

function teachClass (todayClass: Subjects) {
    if (todayClass === 'Math'){
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
};

teachClass('Math');
teachClass('History');