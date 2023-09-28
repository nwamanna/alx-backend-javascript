export default class ClassRoom {
  constructor(number) {
    this._maxStudentsSize = number;
  }

  toString() {
    return `ClassRoom: { _maxStudentsSize: ${this._maxStudentsSize} }`;
  }
}
