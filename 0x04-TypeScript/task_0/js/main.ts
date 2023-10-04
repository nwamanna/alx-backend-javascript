interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

const student1: Student = {
    firstName: 'Amina',
    lastName: 'Adams',
    age: 12,
    location: 'Kano'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Bankole',
    age: 13,
    location: 'Ogun'
};

const studentsList: Array<object> = [ student1, student2 ];

function renderTable() {
    const table = document.createElement('table');
    const headerRow = table.insertRow(0);
    const firstName = headerRow.insertCell(0);
    const lastName = headerRow.insertCell(1);

    firstName.textContent = 'First Name';
    lastName.textContent = 'Last Name';

    studentsList.forEach(function(student: Student, index: number) {
        const studentRow = table.insertRow(index + 1);
        const studentName = studentRow.insertCell(0);
        const studentLocation = studentRow.insertCell(1);

        studentName.textContent = student.firstName;
        studentLocation.textContent = student.location;
    })

    document.body.appendChild(table);
};

renderTable();