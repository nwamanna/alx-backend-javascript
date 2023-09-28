export default class Building {
    constructor(sqft) {
        this.sqft = sqft;

        if (this.constructor !== Building && typeof this.evacuationWarningMessage === "undefined") {
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }
    }

    get sqft() {
        return this._sqft;
    }
    

    /**
     * @param {any} Name
     */
    set sqft(newSqft) {
        if (typeof newSqft === "number") {
            this._sqft = newSqft;
        } else {
            throw new TypeError("Code must be a number");
        }
    }

    toString() {
        return `Building: { _sqft: ${this.sqft} }`;
    }

    // evacuationWarningMessage() {
    //     throw new Error("Class extending Building must override evacuationWarningMessage");
    // }
}