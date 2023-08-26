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
var cube = document.querySelector(".cube");
var modelNames = document.getElementById("modelsInnerDiv");


window.onwheel = function() {verticalCarousel(event)};

function verticalCarousel(evt) {
    if (window.location.href.includes("dragQueen")) {
        if (timer == null) {
            if (evt.deltaY < 0) {
                if (currentPhotoVertical != -1) {
                    currentPhotoVertical -= 1;
                }

                var px = parseInt(getComputedStyle(modelNames).getPropertyValue('--margin-top').replace('px','')) + 26;
                console.log(px);

                if (currentPhotoVertical == 1) {
                    cube.style.transform = "rotateX(90deg)";
                    modelNames.classList = "modelNamesScrollUp";
                    modelNames.style.setProperty("--margin-top", px + "px");
                    modelNames.style.animation = 'none';
                    modelNames.offsetHeight; /* trigger reflow */
                    modelNames.style.animation = null;
                }
                else if (currentPhotoVertical == 0) {
                    cube.style.transform = "rotateX(0deg)";
                    modelNames.classList = "modelNamesScrollUp";
                    modelNames.style.setProperty("--margin-top", px + "px");
                    modelNames.style.animation = 'none';
                    modelNames.offsetHeight; /* trigger reflow */
                    modelNames.style.animation = null;
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
                    modelNames.classList = "modelNamesScrollUp";
                    modelNames.style.setProperty("--margin-top", px + "px");
                    modelNames.style.animation = 'none';
                    modelNames.offsetHeight; /* trigger reflow */
                    modelNames.style.animation = null;
                }
            }
            if (evt.deltaY > 0) {
                if (currentPhotoVertical != 2) {
                    currentPhotoVertical += 1;
                }

                var px = parseInt(getComputedStyle(modelNames).getPropertyValue('--margin-top').replace('px','')) - 26;

                if (currentPhotoVertical == 0) {
                    dragQueen.classList = "";
                    dragQueen.classList.add("scrollIntoView");
                    email.classList.remove("scrollIntoPage");
                    socials.classList.remove("scrollIntoPage");
                    socialsInnerDiv.classList.remove("scrollIntoPageInnerDiv");
                    email.classList.add("scrollOutOfPage");
                    socials.classList.add("scrollOutOfPage");
                    socialsInnerDiv.classList.add("scrollOutOfPageInnerDiv");
                    modelNames.classList = "modelNamesScrollDown";
                    modelNames.style.setProperty("--margin-top", px + "px");
                }
                else if (currentPhotoVertical == 1) {
                    cube.style.transform = "rotateX(90deg)";
                    modelNames.classList = "modelNamesScrollDown";
                    modelNames.style.setProperty("--margin-top", px + "px");
                    modelNames.style.animation = 'none';
                    modelNames.offsetHeight; /* trigger reflow */
                    modelNames.style.animation = null;
                }
                else if (currentPhotoVertical == 2) {
                    cube.style.transform = "rotateX(180deg)";
                    modelNames.classList = "modelNamesScrollDown";
                    modelNames.style.setProperty("--margin-top", px + "px");
                    modelNames.style.animation = 'none';
                    modelNames.offsetHeight; /* trigger reflow */
                    modelNames.style.animation = null;
                }
            }

            timer = setTimeout(() => {
                timer = null;
            },  300);
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

    if (numPhoto > numOfPhotos[currentPhotoVertical] - 1) {
        numPhoto = 0;
    }

    currentPhotoHorizontal[currentPhotoVertical] = numPhoto;
    numPhoto = numPhoto + 1;
    var photo2 = document.getElementById(photoshoots[currentPhotoVertical] + "0" + numPhoto);

    photo1.classList = "scrollOutLeft";
    photo2.classList = "scrollInRight";
}