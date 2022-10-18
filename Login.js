function checkCreds() {
    console.log("checkCreds() function started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumber = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    // alaert("Hello, " + fullName);

     if (badgeNumber > 999 && fullName.length > 20 ) {
        document.getElementById("LoginStatus").innerHTML =
        "Badge Number and Full Name Invalid. Please Try Again!";

    }else if (fullName.length > 20 || fullName.length < 2 ) {
        document.getElementById("LoginStatus").innerHTML =
            "Invalid Full Name. Please Try Again!";


    } else if (badgeNumber > 999 || badgeNumber < 0) {
        document.getElementById("LoginStatus").innerHTML =
        "Invalid Badge Number. Please Try Again!";

    } else {
       alert ("Welcome! " + fullName);
       location.replace ("UATSpacePage.html");
           
    }
}