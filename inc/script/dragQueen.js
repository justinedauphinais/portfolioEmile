var queenPhotos = document.querySelectorAll("section.queenPhotos");
var currentPhoto = -1;
var dragQueen = document.getElementById("dragQueen");
var timer = null;

window.onwheel = function() {myFunction(event)};

function myFunction(evt) {
    if (window.location.href.includes("dragQueen")) {
        if (timer == null) {
            console.log("setting timer");
            timer = setTimeout(() => {
                currentPhoto += 1;
                timer = null;
                document.getElementById(currentPhoto.toString()).scrollIntoView({
                    behavior: 'smooth'
                });
            },  500);
        }
    }
}