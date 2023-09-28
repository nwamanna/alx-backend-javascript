export default class Airport {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    get name() {
        return this._name;
    }

    get code() {
        return this._code;
    }
    

    /**
     * @param {any} Name
     */
    set code(newCode) {
        if (typeof newCode === "string") {
            this._code = newCode;
        } else {
            throw new TypeError("Code must be a string");
        }
    }

    set name(newName) {
        if (typeof newName === "string") {
            this._name = newName;
        } else {
            throw new TypeError("Name must be a string");
        }
    }

    // toString() {
    //     return `Airport [${this.code}] { _name: ${this.name}, _code: ${this.code} }`;
    // }

    get [Symbol.toStringTag]() {
        return `${this.code}`;
    }
}