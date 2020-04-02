// Class name format must be PascalCase and singular
class Person {
    // All properties must be declared first in constructor
    constructor (firstname, lastname) {
        // No logical process here, use instance method instead
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // Instance method or function inside class
    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

// Create new instance Person which is invoking constructor
const jon = new Person ("Jon", "Snow");
console.log(jon);

// Invoking instance method
console.log(jon.fullname());
