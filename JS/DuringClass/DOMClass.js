document.body.onload = addElement;
function addElement() {
    //create a new div element 
    const newDiv = document.createElement("div");
    //some content for div 
    const newContent = document.createTextNode("Hello World!!");

    //adding text to div
    newDiv.appendChild(newContent);
    //add to DOM
    const currentDiv = document.getElementById("currentDiv");
    document.body.insertBefore(newDiv, currentDiv);


    var intro = document.getElementById("intro");
    //Assigning the test from one element to another element.
    document.getElementById("demo").innerText = "Example for using the value from one element to another element.  " + intro.innerText;


    //getElementsByTagName
    var pElements = document.getElementsByTagName("p");
    //this will return a collection of DOM element where tag type is p.
    document.getElementById("usingTagName").innerHTML = "For this example I have used getElementsByTagName. " + pElements[0].innerHTML;

    //getElementsByClassName. this will return collections also. 
    var pElementsByClassName = document.getElementsByClassName("introClass");
    document.getElementById("usingClassName").innerHTML = "For this example I am using getElementsByClassName. " + pElementsByClassName[0].innerText;

    //querySelectorAll
    var usingQuerySelectorAll = document.querySelectorAll("p");
    console.log(usingQuerySelectorAll);
    document.getElementById("usingClassName").innerHTML = "For this example I have used using QuerySelectorAll ." + usingQuerySelectorAll[0].innerHTML;


    //DOM Form 
    // var formValidation = function () {
    //     let fName = document.forms["myForm"]["fName"].value;
    //     if (fName == "") {
    //         document.getElementById("demo").innerHTML = "Empty Name";
    //         // document.write("First name is empty");
    //         return false;
    //     }
    // }
    //DOM FORM
    var formValidation = function () {
        let fName = document.forms["myForm"]["fName"].value;
        if (fName == "") {
            document.getElementById("demo").innerHTML = "Empty Name";
            return false;
        }
    }

    /**
     * Dom Events
     * onclick
     * onChange
     * onmousehover
     * onmousein
     * onmouseout
     * onkeypress
    */
    var displayDate = function () {
        // alert("Function called");
        document.getElementById("displayDate").innerHTML = Date();
    }
    //Using onclick
    // document.getElementById("myButton").onclick = displayDate;

    //using event listener 
    document.getElementById("myButton").addEventListener("click", displayDate);


    //================================================
    //Dom Collections
    const myCollection = document.getElementsByTagName("p");
    console.log(myCollection);
    document.getElementById("demoo").innerHTML = myCollection[7].innerHTML + myCollection[8].innerHTML;



    //+++++++++++++++++++++++++++++++++++++++
    //Sets 
    /**
     * Sets 
     * new set()
     * add()
     * forEach()
     * size 
     */

    const letters = new Set();
    letters.add("a");
    letters.add("b");
    letters.add("c");

    document.getElementById("setsSize").innerHTML = "Size of letters: " + letters.size;

    let text = "";
    letters.forEach(element => {
        text += element + "<br>";
    });

    document.getElementById("sets").innerHTML = "Sets:  <br> " + text;

    let text2 = "";
    for (const x of letters.entries()) {
        text2 += x + "<br>";
    }
    document.getElementById("sets2").innerHTML = "Sets:  <br> " + text;

    /**
     * maps it remember the original insertion order of key
     * new Map
     * set 
     * get
     * size 
     * forEach 
     * 
    */

    const fruit = new Map();
    fruit.set("Apple", 500);
    fruit.set("Banana", 800);
    fruit.set("Sapodilla", 200);
    fruit.set("Oranges", 560);
    fruit.set("Mango", 10000);

    document.getElementById("mapsSize").innerHTML = fruit.size;
    document.getElementById("maps").innerHTML = fruit.get("Apple");
    let text3;
    fruit.forEach(function (valuee, key) {
        text3 += key + " " + valuee + "<br>";
    });


    document.getElementById("maps").innerHTML = text3;
    // document.getElementById("maps").innerHTML = fruit.get("Apple");
    // document.getElementById("maps").innerHTML = fruit.delete("Banana");
    // document.getElementById("maps").innerHTML = fruit.clear();
}