const Manager = require("./Manager.js");
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