const Manager = require("./Manager.js");

// // Require class Staff and Trainee
// const Staff = require("./Staff.js").Staff;
// const Trainee = require("./Staff.js").Trainer;

// require class Staff and Trainee using destructuring
const { Staff, Trainee } = require("./Staff.js");

// Create new instance Manager
const jon = new Manager ("Jon", "Snow");
console.log(jon);

// Create new instance Staff
const arya = new Staff ("Arya", "Stark");
console.log(arya);

// Create new instance Trainee
const theon = new Trainee ("Theon", "Greyjoy");
console.log(theon);