class Employee {
    #firstname;
    #lastname;
    #position;
    #salary;
    constructor(firstname, lastname, position) {
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#position = position;
        this.#salary = this.generateSalary();
    }

    // Getter - always return the value of private field
    get firstname() {
        return this.#firstname;
    }
    get lastname() {
        return this.#lastname;
    }
    get position() {
        return this.#position;
    }
    // get salary() {
    //     return this.#salary;
    // }

    // Setter - always assign the private field with only one value parameter
    set firstname(value) {
        this.#firstname = value;
    }
    set lastname(value) {
        this.#lastname = value;
    }
    set position(value) {
        this.#position = value;
    }
    set salary(value) {
        this.#salary = value;
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

// // Will encounter error if we access / mutate the private field directly
// jon.#firstname = "Arya";
// jon.#lastname = "Stark";
// jon.#position = "staff";
// jon.#salary = jon.generateSalary();

// console.log(jon.#firstname);
// console.log(jon.#lastname);
// console.log(jon.#position);
// console.log(jon.#salary);