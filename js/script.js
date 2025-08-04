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