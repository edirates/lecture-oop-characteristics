class Person {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // In order to be used for method chaining, it must return that instance itself (this)
    wakeup() {
        console.log(`I'm getting up from my bed.`);
        return this;
    }

    // In order to be used for method chaining, it must return that instance itself (this)
    eat(food) {
        console.log(`I'm eating ${food}.`);
        return this;
    }

    // In order to be used for method chaining, it must return that instance itself (this)
    sleep() {
        console.log(`I'll go to sleep. Have a nice dream.`);
        return this;
    }
}

// Create new instance Person
const jon = new Person ("Jon", "Snow");
console.log(jon);

// Running method chaining
jon.wakeup().eat("noodle").sleep().wakeup().eat("noodle").sleep();
