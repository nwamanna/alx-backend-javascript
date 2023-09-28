export default class ClassRoom {
    _maxStudentsSize;

    constructor(number) {
        this._maxStudentsSize = number;
    }

    toString() {
        return `ClassRoom: { _maxStudentsSize: ${this._maxStudentsSize } }`;
    }
}