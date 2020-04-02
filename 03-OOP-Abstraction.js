class Person {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // Instance method with logical process inside
    greeting (moment) {
        if (moment) {
            if (moment.toLowerCase() === "morning") {
                console.log(`Good morning...`);
            } else if (moment.toLowerCase() === "day") {
                console.log(`Good day...`);
            } else if (moment.toLowerCase() === "afternoon") {
                console.log(`Good afternoon...`);
            } else if (moment.toLowerCase() === "night") {
                console.log(`Good night...`);
            } else {
                console.log(`Hi, greetings...`);
            }
        } else {
            console.log(`Hi, greetings...`);
        }
    }
}

// Create new instance Person
const jon = new Person ("Jon", "Snow");
console.log(jon);

// Use instance method without knowing its process
jon.greeting("morning");
jon.greeting("pagi");