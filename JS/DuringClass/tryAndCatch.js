

function myFunction() {
    let message = document.getElementById("message");
    message.innerHTML = "";

    let x = document.getElementById("demo").value;
    try {
        if (x.trim() == "") {
            throw "Empty Value";
        }

        if (isNaN(x)) {
            throw "Is not a number"
        }

        x = Number(x);
        if (x > 10) {
            throw "x is greater than 10 ";
        }

        if (x < 1) {
            throw "x is smaller than 1 ";
        }

    } catch (error) {
        message.innerHTML = "Input error : " + error;
    }
    finally {
        document.getElementById("finally").innerHTML = "Message from finally"
    }

}
