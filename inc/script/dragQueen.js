var photoshoots = {
    0: "b_",
    1: "f_",
    2: "s_"
};
var maxPhotoshoots = 2;

var numOfPhotos = {
    0: 3,
    1: 1,
    2: 1
};

var currentPhotoVertical = -1;
var currentPhotoHorizontal = {
    0: 0,
    1: 0,
    2: 0
};

var dragQueen = document.getElementById("dragQueen");
var timer = null;
hasScrolled = false;
var boomboomPhotos = document.querySelectorAll(".boomboomPhotos");
var socials = document.getElementById("socials");
var socialsInnerDiv = document.getElementById("socialsInnerDiv");
var email = document.getElementById("email");


window.onwheel = function() {verticalCarousel(event)};

function verticalCarousel(evt) {
    if (window.location.href.includes("dragQueen")) {
        if (timer == null) {
            if (evt.deltaY < 0) {
                if (currentPhotoVertical != -1) {
                    currentPhotoVertical -= 1;
                }

                if (currentPhotoVertical == 1) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollUpTwoPage");
                }
                else if (currentPhotoVertical == 0) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollUpOnePage");
                }
                else if (currentPhotoVertical == -1 && document.getElementById("email").classList.contains("scrollOutOfPage")) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollOutOfView");
                    email.classList.remove("scrollOutOfPage");
                    socials.classList.remove("scrollOutOfPage");
                    socialsInnerDiv.classList.remove("scrollOutOfPageInnerDiv");
                    email.classList.add("scrollIntoPage");
                    socials.classList.add("scrollIntoPage");
                    socialsInnerDiv.classList.add("scrollIntoPageInnerDiv");
                }
            }
            if (evt.deltaY > 0) {
                if (currentPhotoVertical != 2) {
                    currentPhotoVertical += 1;
                }

                if (currentPhotoVertical == 0) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollIntoView");
                    email.classList.remove("scrollIntoPage");
                    socials.classList.remove("scrollIntoPage");
                    socialsInnerDiv.classList.remove("scrollIntoPageInnerDiv");
                    email.classList.add("scrollOutOfPage");
                    socials.classList.add("scrollOutOfPage");
                    socialsInnerDiv.classList.add("scrollOutOfPageInnerDiv");
                }
                else if (currentPhotoVertical == 1) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollDownOnePage");
                }
                else if (currentPhotoVertical == 2) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollDownTwoPage");
                }
            }

            timer = setTimeout(() => {
                timer = null;
            },  1000);
        }
    }
}

boomboomPhotos.forEach(photo => {
    photo.onclick = function() {horizontalCarousel(event)};
})

function horizontalCarousel(evt) {
    if (currentPhotoVertical == -1) 
        return;

    var numPhoto = currentPhotoHorizontal[currentPhotoVertical] + 1;
    var photo1 = document.getElementById(photoshoots[currentPhotoVertical] + "0" + numPhoto);
    console.log(photoshoots[currentPhotoVertical] + "0" + numPhoto + 1);

    if (numPhoto > numOfPhotos[currentPhotoVertical] - 1) {
        numPhoto = 0;
    }

    currentPhotoHorizontal[currentPhotoVertical] = numPhoto;
    numPhoto = numPhoto + 1;
    var photo2 = document.getElementById(photoshoots[currentPhotoVertical] + "0" + numPhoto);
    console.log(photoshoots[currentPhotoVertical] + "0" + numPhoto);

    photo1.classList = "scrollOutLeft";
    photo2.classList = "scrollInRight";
}