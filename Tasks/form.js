// document.addEventListener("DOMContentLoaded", function () {
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event) {
    event.preventDefault();


    let name = document.getElementById("username");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let errorMessages = document.getElementById("errorMessages");
    errorMessages.textContent = ""; // Clear previous error messages

    let isValid = true;

    // Form validation
    if (!name.value.trim()) {
        displayErrorMessage("Name is required");
        isValid = false;
    }
    if (!email.value.trim()) {
        displayErrorMessage("Email is required");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        displayErrorMessage("Invalid email format");
        isValid = false;
    }
    if (!pass.value.trim()) {
        displayErrorMessage("Password is required");
        isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
        myForm.submit();
    }
});

function displayErrorMessage(message) {
    let errorMessages = document.getElementById("errorMessages");
    errorMessages.textContent = message;
}

function isValidEmail(email) {
    debugger;
    // Very basic email format validation
    return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
}
// });