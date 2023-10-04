type format = string | boolean | number | object;

interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: format,
};


const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};


console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number,
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.slice(0, 1)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));


interface student {
    displayName(): string;
    workOnHomework(): string;
}

// interface studentConstructor {
//     firstName: string;
//     lastName: string;
// }

class StudentClass implements student {
    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayName() {
        return this.firstName;
    }

    workOnHomework() {
        return "Currently working";
    }
}