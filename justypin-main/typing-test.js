/*typing test*/
const typingText = document.querySelector(".window p")
const inpField = document.querySelector(".main .input")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")
const WPMsus= document.querySelector(".content .wpm span b")
let Tag=document.getElementById('time')
let Tyag=document.getElementById('tyme')

let a=0; /* no cheatin */

let maxTime=30;
let timeLeft=30;
function change(){
    if(a<100000){
        if(maxTime==15){
            maxTime= 30;
            timeLeft = maxTime;
            Tag.innerText='30s';
            Tyag.innerText='30s';
            return maxTime;
        }
        if(maxTime==30){
            maxTime= 45;
            timeLeft = maxTime;
            Tag.innerText='45s';
            Tyag.innerText='45s';
            return maxTime;
        }
        if(maxTime==45){
            maxTime= 60;
            timeLeft = maxTime;
            Tag.innerText='60s';
            Tyag.innerText='60s';
            return maxTime;
        }
        if(maxTime==60){
            maxTime= 15;
            timeLeft = maxTime;
            Tag.innerText='15s';
            Tyag.innerText='15s';
            return maxTime;
        }
    }
};

let timer;
let charIndex = mistakes = isTyping = 0;

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;
        wpmTag.innerText = wpm;
        WPMsus.innerText= wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
        scroll(charIndex);
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}


function initTimer() {
    a=100000;
    if (timeLeft > 0) {
        timeLeft--;
        if(timeLeft== 0){
            popupopen()
        }
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
        WPMsus.innerText= wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    WPMsus.innerText= 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);

