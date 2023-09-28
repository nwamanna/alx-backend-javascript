export default class Car {
    constructor(brand, motor, color) {
        this.brand = brand;
        this.motor = motor;
        this.color = color;
    }

    get brand() {
        return this._brand;
    }

    get motor() {
        return this._motor;
    }

    get color() {
        return this._color;
    }
    
    set brand(newBrand) {
        if (typeof newBrand === "string") {
            this._brand = newBrand;
        } else {
            throw new TypeError("Brand must be a string");
        }
    }

    set motor(newMotor) {
        if (typeof newMotor === "string") {
            this._motor = newMotor;
        } else {
            throw new TypeError("Motor must be a string");
        }
    }

    set color(newColor) {
        if (typeof newColor === "string") {
            this._color = newColor;
        } else {
            throw new TypeError("Color must be a string");
        }
    }

    cloneCar() {
        return new this.constructor(`${this.brand}`, `${this.motor}`, `${this.color}`);
    }
}