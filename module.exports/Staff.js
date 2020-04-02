const Employee = require("./Employee.js");

class Staff extends Employee {
    constructor(firstname, lastname) {
        super(firstname, lastname, "staff");
    }
}

module.exports = Staff;