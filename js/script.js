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
function lightBorder() {
    document.getElementById("slider").style.borderColor = "#FFFFFF";
}

// return the yellow color when the mouse leaves
function normalBorder() {
    document.getElementById("slider").style.borderColor = "#FFD60A";
}