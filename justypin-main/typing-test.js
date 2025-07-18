/*typing test*/
// DOM element references
const typingText = document.querySelector(".window p");
const inpField = document.querySelector(".main .input");
const timeTag = document.querySelector(".time span b");
const mistakeTag = document.querySelector(".mistake span");
const wpmTag = document.querySelector(".wpm span");
const cpmTag = document.querySelector(".cpm span");
const popupWpmTag = document.querySelector(".content .wpm span b");
const timeDisplayMain = document.getElementById('time');
const timeDisplayPopup = document.getElementById('tyme');

// Game state variables
let isTimerStarted = false; // Better naming than 'a'
let maxTime = 30;
let timeLeft = 30;
/**
 * Changes the test duration in a cycle: 15s -> 30s -> 45s -> 60s -> 15s
 * Only works if the timer hasn't started yet
 */
function change(){
    // Only allow changing time if the test hasn't started
    if(!isTimerStarted){
        // Define the time options in sequence
        const timeOptions = [15, 30, 45, 60];
        
        // Find the current time option index
        const currentIndex = timeOptions.indexOf(maxTime);
        
        // Get the next time option (cycle back to beginning if at the end)
        const nextIndex = (currentIndex + 1) % timeOptions.length;
        maxTime = timeOptions[nextIndex];
        
        // Update the time left and displays
        timeLeft = maxTime;
        const timeText = `${maxTime}s`;
        timeDisplayMain.innerText = timeText;
        timeDisplayPopup.innerText = timeText;
        
        return maxTime;
    }
};

let timer;
let charIndex = mistakes = isTyping = 0;

/**
 * Handles the typing input and updates the UI accordingly
 */
function initTyping() {
    const characters = typingText.querySelectorAll("span");
    const typedChar = inpField.value.split("")[charIndex];
    
    // Check if we should continue processing input
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        // Start the timer on first keystroke
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        
        // Handle backspace (when typedChar is null)
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                // If removing an incorrect character, decrement mistake count
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                // Reset the character's state
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            // Check if the typed character matches the expected character
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        
        // Update the active character indicator
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        // Calculate and update WPM (words per minute)
        const elapsedTime = maxTime - timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (elapsedTime || 1) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        
        // Update all stats displays
        wpmTag.innerText = wpm;
        popupWpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes; // CPM (characters per minute)
        
        // Handle scrolling to keep the active character visible
        scroll(charIndex);
    } else {
        // End the test if we've reached the end or time is up
        clearInterval(timer);
        inpField.value = "";
        
        // If we've reached the end of the text, show results
        if (charIndex >= characters.length - 1) {
            popupopen();
        }
    }
}


function initTimer() {
    isTimerStarted = true;
    if (timeLeft > 0) {
        timeLeft--;
        if(timeLeft == 0){
            popupopen();
        }
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmTag.innerText = wpm;
        popupWpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    isTimerStarted = false;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    popupWpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);

