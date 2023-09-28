export default class Currency {
    constructor(code, name) {
        this.code = code;
        this.name = name;
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

    toString() {
        return `Currency: { _code: ${this.code}, _name: ${this.name} }`;
    }

    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}