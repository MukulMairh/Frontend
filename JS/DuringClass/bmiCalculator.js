
//Masses in kgs
const jhonMass = 60;
const markMass = 55;

//Height's in meters 
const jhonHeight = 1.65;
const markHeight = 1.60;

function bmiCalculator(mass, height) {
    return mass / (height * height)
}

let jhonBMI = bmiCalculator(jhonMass, jhonHeight);
let markBMI = bmiCalculator(markMass, markHeight);

//String contatenation
console.log("Height of Jhon " + jhonHeight + " meters");
console.log("Weight of Jhon " + jhonMass + " kgs");

console.log(`Height of Mark is ${markHeight} meters `);
console.log(`Height of Mark is ${markMass} kgs`);

console.log("JhonBMI Round offs = " + jhonBMI.toFixed(2));
console.log("markBMI Round offs = " + markBMI.toFixed(2));

//ternary operators and string literals 
jhonBMI > markBMI ? console.log(`Jhon's BMI(${jhonBMI}) is greater than Mark's BMI(${markBMI}).`) :
    console.log(`Mark's BMI(${markBMI}) is greater than Jhon's BMI(${jhonBMI}).`); 
