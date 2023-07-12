var bracketsName = document.querySelectorAll("div.bracketName");
var bracketBehance = document.querySelectorAll("p.bracketBehance");
var bracketLinkedin = document.querySelectorAll("p.bracketLinkedin");
var bracketInstagram = document.querySelectorAll("p.bracketInstagram");

var emileRouillard = document.getElementById("nameButton");
var behance = document.getElementById("behance");
var linkedin = document.getElementById("linkedin");
var instagram = document.getElementById("instagram");

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
        behance.classList.add("orange");
    });
});

behance.addEventListener("mouseout", () => {
    bracketBehance.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
        behance.classList.remove("orange");
    });
});

linkedin.addEventListener("mouseover", () => {
    bracketLinkedin.forEach(bracket => {
        bracket.classList.remove("noOpacity");
        bracket.classList.add("fadeIn");
        linkedin.classList.add("orange");
    });
});

linkedin.addEventListener("mouseout", () => {
    bracketLinkedin.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
        linkedin.classList.remove("orange");
    });
});

instagram.addEventListener("mouseover", () => {
    bracketInstagram.forEach(bracket => {
        bracket.classList.remove("noOpacity");
        bracket.classList.add("fadeIn");
        instagram.classList.add("orange");
    });
});

instagram.addEventListener("mouseout", () => {
    bracketInstagram.forEach(bracket => {
        bracket.classList.remove("fadeIn");
        bracket.classList.add("fadeOut");
        instagram.classList.remove("orange");
    });
});