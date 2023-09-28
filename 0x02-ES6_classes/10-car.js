export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand === 'string') {
      this._brand = newBrand;
    } else {
      throw new TypeError('Brand must be a string');
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof newMotor === 'string') {
      this._motor = newMotor;
    } else {
      throw new TypeError('Motor must be a string');
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof newColor === 'string') {
      this._color = newColor;
    } else {
      throw new TypeError('Color must be a string');
    }
  }

  cloneCar() {
    return new this.constructor(`${this.brand}`, `${this.motor}`, `${this.color}`);
  }
}
