function hamburgeropen() {
    var burger = document.getElementById("menubar");
    
    if (window.innerWidth >= 1024){
        if (burger.style.transform === "translateY(-100%)")
            {document.getElementById("menubar").style.transform = "translateY(0)";}
        else 
            {document.getElementById("menubar").style.transform = "translateY(-100%)"}
    }
    else {
        if (burger.style.transform === "translateX(-100%)")
            {document.getElementById("menubar").style.transform = "translateX(0)";}
        else
            {document.getElementById("menubar").style.transform = "translateX(-100%)";}
    }
}

function hamburgerclose() {
    if (window.innerWidth >= 1024)
    {document.getElementById("menubar").style.transform = "translateY(-100%)"}
    else {document.getElementById("menubar").style.transform = "translateX(-100%)";}
}

function dropdownsort () {
    document.getElementById("sort-list").style.visibility ="visible";
}

function filteropen () {
    document.getElementById("filter-list").style.visibility ="visible";
    document.body.style.overflow = "hidden";
}

function filterclose() {
    document.getElementById("filter-list").style.visibility ="hidden";
    document.body.style.overflow = "auto";
}

function selectsize(n) {
    console.log(n);
}


var slideindex = 1;
showslide(slideindex);

function addslides(n) {
    showslide(slideindex += n);
}

function thumbnail(n) {
    showslide(slideindex = n);
}

function showslide(n) {
    var i;
    var slides = document.getElementsByClassName("productslide");
    var thumbnail = document.getElementsByClassName("productthumbnail");

    if (n > slides.length){
        slideindex = 1;
    }

    for (i=0; i < slides.length; i++)
    {slides[i].style.display = "none";}

    slides[slideindex-1].style.display = "block";
   
}