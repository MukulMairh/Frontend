function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);

}

function myDisplayer(sum) {
    document.getElementById("demo").innerHTML = "Hello";
    document.write("Good Night");
}

myCalculator(0, 0, "myabc")
myDisplayer(0)