
var formValidation = function () {
    let fName = document.forms["myForm"]["fName"].value;
    if (fName == "") {
        document.getElementById("demo").innerHTML = "Empty Name";
        return false;
    }
}
