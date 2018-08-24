var header = document.getElementById("header");
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;
header.setAttribute("style", "background-color: white; color: black;");

window.onresize = function() {resizeFunction(), checkNavClass()};

function resizeFunction() {
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
};

function checkNavClass() {
    if (screenWidth > 1400 && header.className === "responsive_nav") {
        header.className = "nav";
    }
};

function openNavbar() {
    if (header.className === "nav") {
        header.className = "responsive_nav";
    } else if (header.className === "responsive_nav") {
        header.className = "nav";
    } 
};
