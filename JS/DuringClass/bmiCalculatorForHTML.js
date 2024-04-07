let jhonHeight = 1, jhonWeight = 1, markHeight = 1, markWeight = 1;



//bmi calculation logic
function bmiCalculator(mass, height) {
    return mass / (height * height)
}

let jhonBMI; let markBMI;
// getBMIs is a anonymous function.
function getBMIs() {
    jhonBMI = bmiCalculator(jhonWeight, jhonHeight);
    markBMI = bmiCalculator(markWeight, markHeight);
}

//submitValues function will get the values submitted from frontend
function submitValues() {
    //fetching the values from html 
    let htmlJhonHeight = document.getElementById("jhonHeight").value;
    jhonHeight = htmlJhonHeight;
    let htmlJhonWeight = document.getElementById("jhonWeight").value;
    jhonWeight = htmlJhonWeight;
    //Mark's 
    let htmlMarkHeight = document.getElementById("markHeight").value;
    markHeight = htmlMarkHeight;
    let htmlMarkWeight = document.getElementById("markWeight").value;
    markWeight = htmlMarkWeight;

    //calling the calculation process
    getBMIs();


}

//Creating element to show the element to show the bmi values *2


//Creting an element to show bmi comparision


//ternary operators and string literals
// jhonBMI > markBMI ? console.log(`Jhon's BMI(${jhonBMI}) is greater than Mark's BMI(${markBMI}).`) :
//     console.log(`Mark's BMI(${markBMI}) is greater than Jhon's BMI(${jhonBMI}).`); 
