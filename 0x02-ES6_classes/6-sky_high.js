import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this.floors = floors;

    }

    get floors() {
        return this._floors;
    }
    

    /**
     * @param {any} Name
     */
    set floors(newFloor) {
        if (typeof newFloor === "number") {
            this._floors = newFloor;
        } else {
            throw new TypeError("Floors must be a number");
        }
    }


    evacuationWarningMessage() {
     return `Evacuate slowly the ${this.floors} floors`;
    }
}