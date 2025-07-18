/* 
 * Popup functionality
 * Controls the display of the results popup
 */

/**
 * Toggles the popup visibility
 */
function popupopen(){
    popup.classList.toggle("open-popup");
}

/* scroll */
var targetDivision = document.getElementById('window');/* place where you type */
var cursorpoint = 1;
var scrollcount = 0;
function scroll(charIndex){
    // Fix the undefined variable issue
    var offp = document.querySelectorAll('.window span')[cursorpoint].offsetTop;
    var offw = document.querySelectorAll('.window span')[charIndex].offsetTop;
    
    if(offw > offp){
        scrollcount += 1;
        cursorpoint = charIndex;
        let scrollAmount = (offw - offp) * scrollcount;
        targetDivision.scrollTop = scrollAmount;
    }
    if(offw < offp){
        cursorpoint = charIndex - 1;
        scrollcount -= 1;
        let scrollAmount = (offp - offw) * scrollcount;
        targetDivision.scrollTop = scrollAmount;
    }
}
