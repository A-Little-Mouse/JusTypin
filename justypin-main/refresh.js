/**
 * Resets the typing test without reloading the page
 * Resets game state, scrolling, and focuses on input
 */
function refresh() {  
    myInput.focus();
    document.getElementById('window').scrollTop = 0;
    popup.classList.remove("open-popup");
    resetGame();
    cursorpoint = 1;
    scrollcount = 0;
    isTimerStarted = false; // Using the renamed variable
}

/**
 * Completely refreshes the page
 */
function refreshpage(){
    location.reload();
}

