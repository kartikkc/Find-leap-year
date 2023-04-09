function calculate() {
    var x = document.getElementById("year").value;
    if (x == "") {
        window.alert("Please enter the year!!");
    }
    else {
        if (x % 4 == 0 && x % 100 == 0 && x % 400 == 0) {
            document.getElementById("results").innerHTML = "The year " + x + " is a LEAP YEAR!!";
            console.log("a leap year!!");
        }
        else if (x % 100 != 0 && x % 4 == 0) {
            document.getElementById("results").innerHTML = "The year " + x + " is a LEAP YEAR!!";
            console.log("a leap year!!");
        }
        else {
            document.getElementById("results").innerHTML = "The year " + x + " is `NOT` a LEAP YEAR!!";
            console.log("Not a leap year!!");
        }
        console.log(x);

    }
}