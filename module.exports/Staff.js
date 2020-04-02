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

// If there are more than one to be exported you should pack it with object
module.exports = {
    Staff,
    Trainee
};