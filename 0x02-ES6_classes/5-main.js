import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    const test = new TestBuilding(200);
    console.log(test);
}
catch(err) {
    console.log(err);
}

// console.log(test);
