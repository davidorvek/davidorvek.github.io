if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("cv").setAttribute("href", "cv/CV.pdf");
    document.getElementById("cv").setAttribute("download"); 
} else {
    document.getElementById("cv").setAttribute("href", "html/cv.html");
}