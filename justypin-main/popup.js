/* opens popup window */

function popupopen(){
    popup.classList.toggle("open-popup");
 }

/* scroll */
var targetDivision = document.getElementById('window');/* place where you type */
var cursorpoint= 1
var scrollcount=0;
function scroll(charIndex){
var offp= document.querySelectorAll('.window span')[sussyniqqa].offsetTop;
var offw= document.querySelectorAll('.window span')[charIndex].offsetTop;
        if(offw>offp){
            scrollcount+=1;
            cursorpoint=charIndex;
            let sundari=(offw-offp)*scrollcount
            targetDivision.scrollTop = sundari ;
        }
        if(offw<offp){
            cursorpoint=charIndex-1;
            scrollcount-=1;
            let sundar=(offp-offw)*scrollcount;
            targetDivision.scrollTop = sundar;
        }
    }         
