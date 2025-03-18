
/* keyboard */

let popup = document.getElementById('popup')
const myInput = document.getElementById('input');
let keys = document.querySelectorAll('.keys');


window.onload = function() {
  myInput.focus();
};


for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if (event.key === 'Tab') {
            event.preventDefault();
            refreshpage();
        }

        if (event.key === 'Escape') {
            event.preventDefault();
            popup.classList.remove("open-popup");
        }
    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})


