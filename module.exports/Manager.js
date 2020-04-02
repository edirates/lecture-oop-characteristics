const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(firstname, lastname) {
        super(firstname, lastname, "manager");
        this._bonus = 5000000;
    }

    get bonus() {
        return this._bonus;
    }

    set bonus(value) {
        this._bonus = value;
    }
}

module.exports = Manager;