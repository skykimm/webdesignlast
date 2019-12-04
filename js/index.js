var firstslide = document.querySelector(".img:first-child");
var clickbtn = document.querySelectorAll(".btn");
var clicktab = document.querySelectorAll(".tab");


function slideshow(){
    var currnetslide = document.querySelector(".showing");
    if(currnetslide){
        currnetslide.classList.remove("showing");
        var nextslide = currnetslide.nextElementSibling;
        if(nextslide){
            nextslide.classList.add("showing");
        }
        else{
            firstslide.classList.add("showing");
        }
    }
    else{
        firstslide.classList.add("showing");
    }
}

slideshow();
window.setInterval("slideshow()",2000);

function tabs(n){
    var currentbtn = document.querySelector(".btns");
    var currenttab = document.querySelector(".tabs");
    if(currentbtn){
        currentbtn.classList.remove("btns");
        currenttab.classList.remove("tabs");
    }
    clickbtn[n].classList.add("btns");
    clicktab[n].classList.add("tabs");
}