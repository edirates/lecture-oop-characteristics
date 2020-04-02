class Employee {
    // Parent constructor
    constructor(firstname, lastname, position) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._position = position;
        this._salary = this.generateSalary();
    }

    // Parent getter
    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }
    get position() {
        return this._position;
    }
    get salary() {
        return this._salary;
    }

    // Parent setter
    set firstname(value) {
        this._firstname = value;
    }
    set lastname(value) {
        this._lastname = value;
    }
    set position(value) {
        this._position = value;
    }
    set salary(value) {
        this._salary = value;
    }

    // Parent instance method
    generateSalary() {
        if (this.position.toLowerCase() === "manager") {
            return 20000000;
        } else if (this.position.toLowerCase() === "staff") {
            return 10000000;
        } else {
            return 0;
        }
    }
}

module.exports = Employee;