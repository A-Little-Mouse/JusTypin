
/* keyboard */

// DOM element references
const popup = document.getElementById('popup');
const myInput = document.getElementById('input');
const keys = document.querySelectorAll('.keys');

// Focus on input field when page loads
window.onload = function () {
    myInput.focus();
};

// Set key attributes for all keyboard keys
keys.forEach(key => {
    key.setAttribute('keyname', key.innerText);
    key.setAttribute('lowerCaseName', key.innerText.toLowerCase());
});

// Handle keydown events
window.addEventListener('keydown', function (e) {
    // Highlight the pressed key
    keys.forEach(key => {
        if (e.key === key.getAttribute('keyname') || e.key === key.getAttribute('lowerCaseName')) {
            key.classList.add('active');
        }
    });

    // Special key handling
    if (e.key === 'Tab') {
        e.preventDefault();
        refreshpage();
    }

    if (e.key === 'Escape') {
        e.preventDefault();
        popup.classList.remove("open-popup");
    }
});

// Handle keyup events
window.addEventListener('keyup', function (e) {
    keys.forEach(key => {
        if (e.key === key.getAttribute('keyname') || e.key === key.getAttribute('lowerCaseName')) {
            key.classList.remove('active');
            key.classList.add('remove');

            // Remove the animation class after animation completes
            setTimeout(() => {
                key.classList.remove('remove');
            }, 200);
        }
    });
});


