var bracketsName = document.querySelectorAll("div.bracketName");
var bracketBehance = document.querySelectorAll("p.bracketBehance");
var bracketLinkedin = document.querySelectorAll("p.bracketLinkedin");
var bracketInstagram = document.querySelectorAll("p.bracketInstagram");
var bracketAccueil = document.querySelectorAll("p.bracketAccueil");
var bracketAction = document.querySelectorAll("p.bracketAction");
var bracketMode = document.querySelectorAll("p.bracketMode");
var bracketDragQueen = document.querySelectorAll("p.bracketDragQueen");

var emileRouillard = document.getElementById("nameButton");
var behance = document.getElementById("behance");
var linkedin = document.getElementById("linkedin");
var instagram = document.getElementById("instagram");
var accueil = document.getElementById("accueil");
var action = document.getElementById("action");
var mode = document.getElementById("mode");
var dragQueen = document.getElementById("dragQueenLink");

emileRouillard.addEventListener("mouseover", () => {
    bracketsName.forEach(bracket => {
        bracket.classList.remove("noOpacity");
        bracket.classList.add("fadeIn");
    });
});

emileRouillard.addEventListener("mouseout", () => {
    bracketsName.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
    });
});

behance.addEventListener("mouseover", () => {
    bracketBehance.forEach(bracket => {
        bracket.classList.remove("noOpacity");
        bracket.classList.add("fadeIn");
    });
});

behance.addEventListener("mouseout", () => {
    bracketBehance.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
    });
});

linkedin.addEventListener("mouseover", () => {
    bracketLinkedin.forEach(bracket => {
        bracket.classList.remove("noOpacity");
        bracket.classList.add("fadeIn");
    });
});

linkedin.addEventListener("mouseout", () => {
    bracketLinkedin.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
    });
});

instagram.addEventListener("mouseover", () => {
    bracketInstagram.forEach(bracket => {
        bracket.classList.remove("noOpacity");
        bracket.classList.add("fadeIn");
    });
});

instagram.addEventListener("mouseout", () => {
    bracketInstagram.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
    });
});

accueil.addEventListener("mouseover", () => {
    bracketAccueil.forEach(bracket => {
        bracket.classList.remove("noOpacity");
        bracket.classList.add("fadeIn");
    });
});

accueil.addEventListener("mouseout", () => {
    bracketAccueil.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
    });
});

action.addEventListener("mouseover", () => {
    bracketAction.forEach(bracket => {
        bracket.classList.remove("noOpacity");
        bracket.classList.add("fadeIn");
    });
});

action.addEventListener("mouseout", () => {
    bracketAction.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
    });
});

mode.addEventListener("mouseover", () => {
    bracketMode.forEach(bracket => {
        bracket.classList.remove("noOpacity");
        bracket.classList.add("fadeIn");
    });
});

mode.addEventListener("mouseout", () => {
    bracketMode.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
    });
});

dragQueen.addEventListener("mouseover", () => {
    bracketDragQueen.forEach(bracket => {
        bracket.classList.remove("noOpacity");
        bracket.classList.add("fadeIn");
    });
});

dragQueen.addEventListener("mouseout", () => {
    bracketDragQueen.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
    });
});

// Modale
var modale = document.getElementById("contactModal");
var contact = document.getElementById("contact");

contact.addEventListener("click", () => {
    modale.classList.toggle("hide");
});