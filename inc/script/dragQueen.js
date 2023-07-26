var currentPhoto = -1;
var dragQueen = document.getElementById("dragQueen");
var timer = null;
hasScrolled = false;

window.onwheel = function() {myFunction(event)};

function myFunction(evt) {
    if (window.location.href.includes("dragQueen")) {
        if (timer == null) {
            if (evt.deltaY < 0) {
                if (currentPhoto != -1) {
                    currentPhoto -= 1;
                }

                if (currentPhoto == 1) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollUpTwoPage");
                }
                else if (currentPhoto == 0) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollUpOnePage");
                }
                else if (currentPhoto == -1 && document.getElementById("email").classList.contains("scrollOutOfPage")) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollOutOfView");
                    document.getElementById("email").classList.remove("scrollOutOfPage");
                    document.getElementById("socials").classList.remove("scrollOutOfPage");
                    document.getElementById("email").classList.add("scrollIntoPage");
                    document.getElementById("socials").classList.add("scrollIntoPage");
                }
            }
            if (evt.deltaY > 0) {
                if (currentPhoto != 2) {
                    currentPhoto += 1;
                }

                if (currentPhoto == 0) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollIntoView");
                    document.getElementById("email").classList.remove("scrollIntoPage");
                    document.getElementById("socials").classList.remove("scrollIntoPage");
                    document.getElementById("email").classList.add("scrollOutOfPage");
                    document.getElementById("socials").classList.add("scrollOutOfPage");
                }
                else if (currentPhoto == 1) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollDownOnePage");
                }
                else if (currentPhoto == 2) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollDownTwoPage");
                }
            }

            timer = setTimeout(() => {
                timer = null;
            },  400);
        }
    }
}