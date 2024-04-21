/**
 * Json JS  object notation 
 * It is a text format for storing and transforming data 
 * It is self describe and easy to understand 
 * {"name":"Jhon", "age": 50}
 * syntax of JSON
 */

const myObj = {
    name: "Jhon",
    age: 40,
    address: "xyz"
}
document.getElementById("demo").innerHTML = myObj.name;
document.getElementById("demo1").innerHTML = myObj.age;
document.getElementById("demo2").innerHTML = myObj.address;


/**
 * 1. String {name: "Jhoon"}
 * 2. number {age: 30}
 * 3. Json Object {employee: {name:"Jhon", age=40}}
 * 4. Array {empData: [jhoon, 30, "xyz"]}
 * 5. boolean {isPassed: true}
 * 6. null {name: null}
 */

//JSON has 2 methods 
//JSON.Parse() : when we get data from api than that response is in string {name: Jhon}

const myObject = '{ "name": "Jhon", "age": 40, "address": "xyz" }';//server string response 

/**
 * Without JSON parsing one is supposed to get the data in this format
 * document.getElementById("demo3").innerHTML= myObject["age"];
 * With JSON.parse() you will be able to access the data in format shown below: 
 * document.getElementById("demo3").innerHTML = myObject.age;
 */
const obj = JSON.parse(myObject);
document.getElementById("demo3").innerHTML = obj.name;
// document.getElementById("demo3").innerHTML= myObject["age"];


//Json Stringify
const person = { name: "Jhon", age: 40, address: "xyz" };
//Using localStorage as server
localStorage.setItem("testJsonData", person);
let text = localStorage.getItem("testJsonData");
let objj = JSON.parse(text);
document.getElementById("demo").innerHTML = objj.name;


///Object Destructuring: 
//It is use to unpack values from arrays or properties from objects..
//old way 

const vehicles = ["mustang", "F-150"];
const car = vehicles[0];
const truck = vehicles[1];

//Destructuring
const [car1, truck1] = vehicles;
console.log(car1, truck1)
document.getElementById("demo4").innerHTML = car1 + " " + truck1;



