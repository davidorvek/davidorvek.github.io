var header = document.getElementById("header");
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;

window.onresize = function() {resizeFunction(), scrollFunction(), checkNavClass()};

function resizeFunction() {
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
};

function checkNavClass() {
    if (screenWidth > 1400 && header.className === "responsive_nav") {
        header.className = "nav";
    }
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (screenWidth > 1400) {
        if (document.documentElement.scrollTop > 0.93 * screenHeight) {
            header.setAttribute("style", "background-color: white; color: black;");
        } else {
            header.setAttribute("style", "background-color: transparent; color: white;");
        }
    } else {
        header.setAttribute("style", "background-color: white; color: black;");
    }
};

function openNavbar() {
    if (header.className === "nav") {
        header.className = "responsive_nav";
    } else if (header.className === "responsive_nav") {
        header.className = "nav";
    }
};
