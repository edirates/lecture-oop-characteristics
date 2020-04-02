// Require fs to use its method
const fs = require("fs");

// Declare class Person
class Person {
    constructor (data) {
        this.firstname = data.firstname;
        this.lastname = data.lastname;
    }

    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

// Read file using fs method
const people = JSON.parse(fs.readFileSync("./people.json", "utf8"));

// Declare result to contain Person instances
let result = [];

// Convert each person in people into Person instances
for (let i = 0; i < people.length; i++) {
    let person = new Person (people[i]);
    result.push(person);
}

// Display the result
console.log(result);