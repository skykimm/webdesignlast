var slideshow = document.querySelector(".slidebox");
var count = 0;



function slide(){
    if(count==2){
        count=0;
    }
    else{
        count++;
    }
    slideshow.style.left = 800 *(-count)+"px";
}
window.setInterval("slide()",2000);