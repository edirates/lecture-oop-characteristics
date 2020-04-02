const Employee = require("./Employee.js");

class Staff extends Employee {
    constructor(firstname, lastname) {
        super(firstname, lastname, "staff");
    }
}

class Trainee extends Employee {
    constructor(firstname, lastname) {
        super(firstname, lastname, "trainee");
    }
}

module.exports = {
    Staff,
    Trainee
};