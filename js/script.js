// ----- home page slider -----

var current = 1;   // number of the movie shown now (1 to 3)

// change the picture and the text
function showMovie() {
    var img = document.getElementById("slideImg");
    var title = document.getElementById("slideTitle");
    var info = document.getElementById("slideInfo");

    switch (current) {
        case 1:
            img.src = "images/harrypotter.jpg";
            title.innerHTML = "Harry Potter " + makeStars(5);
            info.innerHTML = "Based on the novel by J.K. Rowling";
            break;
        case 2:
            img.src = "images/alice.jpg";
            title.innerHTML = "Alice in Wonderland " + makeStars(4);
            info.innerHTML = "Based on the novel by Lewis Carroll";
            break;
        case 3:
            img.src = "images/charlie.jpg";
            title.innerHTML = "Charlie and the Chocolate Factory " + makeStars(4);
            info.innerHTML = "Based on the novel by Roald Dahl";
            break;
    }
}

// next button
function nextMovie() {
    current++;
    if (current > 3) {
        current = 1;   // back to the first movie
    }
    showMovie();
}

// prev button
function prevMovie() {
    current--;
    if (current < 1) {
        current = 3;   // go to the last movie
    }
    showMovie();
}
// make rating stars using a loop (out of 5)
function makeStars(count) {
    var stars = "";
    for (var i = 1; i <= 5; i++) {
        if (i <= count) {
            stars += "★";   // full star
        } else {
            stars += "☆";   // empty star
        }
    }
    return stars;
}

// change the slider border color when the mouse is on it
function lightBorder(box) {
    box.style.borderColor = "#FFFFFF";
}

// return the yellow color when the mouse leaves
function normalBorder(box) {
    box.style.borderColor = "#FFD60A";
}

// ----- sign up page -----

// add a new message inside the messages box
function addMessage(text, color) {
    document.getElementById("messages").innerHTML += "<p style='color:" + color + "; font-weight: bold;'>" + text + "</p>";
}

// check the sign up form (runs when the form is submitted)
function checkSignup() {
    var ids = ["name", "email", "password", "confirm"];
    var allFilled = true;

    // remove old messages
    document.getElementById("messages").innerHTML = "";

    // loop on the fields: red border if the field is empty
    for (var i = 0; i < ids.length; i++) {
        var field = document.getElementById(ids[i]);
        if (field.value === "") {
            field.style.borderColor = "#C0392B";
            allFilled = false;
        } else {
            field.style.borderColor = "#CCCCCC";
        }
    }

    if (allFilled === false) {
        addMessage("Please fill in all the fields.", "#C0392B");
        return false;
    }

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var ok = true;

    // email must have @ and a dot
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        addMessage("Please write a correct email.", "#C0392B");
        ok = false;
    }

    // password is 8 characters or more
    if (password.length < 8) {
        addMessage("Password must be 8 characters or more.", "#C0392B");
        ok = false;
    }

    // password and confirm are the same
    if (password !== confirm) {
        addMessage("Password and confirm password are not the same.", "#C0392B");
        ok = false;
    }

    if (ok === true) {
        addMessage("Welcome to Page2Screen, " + name + "! Your account is ready.", "#1E8449");
    }

    return false;   // no server, so we do not send the form
}