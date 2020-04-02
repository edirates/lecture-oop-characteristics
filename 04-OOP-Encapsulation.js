class Employee {
    constructor(firstname, lastname, position) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._position = position;
        this._salary = this.generateSalary();
    }

    // Getter - always return the value of private field
    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }
    get position() {
        return this._position;
    }
    // Since salary is a private thing so we don't need to declare its getter
    // get salary() {
    //     return this._salary;
    // }

    // Setter - always assign the private field with value parameter
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

    // Instance method - generate salary based on position
    generateSalary() {
        if (this.position.toLowerCase() === "manager") {
            return 20000000;
        } else if (this.position.toLowerCase() === "staff") {
            return 10000000;
        } else {
            return 0;
        }
    }

    // // Wrong return value with its getter name
    // get salary() {
    //     return this.salary; // RangeError: Maximum call stack size exceeded
    // }
    // // Wrong assign value with its setter name
    // set salary(value) {
    //     this.salary = value; // RangeError: Maximum call stack size exceeded
    // }
}

// Create new instance Employee
const jon = new Employee ("Jon", "Snow", "manager");
console.log(jon);

// Use setter to change the value of properties
jon.firstname = "Arya";
jon.lastname = "Stark";
jon.position = "staff";
jon.salary = jon.generateSalary();

// Use getter to retrieve the value of properties
console.log(jon.firstname);
console.log(jon.lastname);
console.log(jon.position);
console.log(jon.salary);

// // Bad practice using setter and getter
// jon._firstname = "Arya";
// jon._lastname = "Stark";
// jon._position = "staff";
// jon._salary = jon.generateSalary();

// console.log(jon._firstname);
// console.log(jon._lastname);
// console.log(jon._position);
// console.log(jon._salary);