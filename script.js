function randomLetter() {
    const alphabet = "abcdefjklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

const display = document.getElementById('body');
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const play = document.getElementById('play');
const start1 = document.getElementById('start');
const time = document.getElementById('time');
let time1 = 0;
let process = null;

function pressed() {
    time1 = 0; // Reset time
    time.innerHTML = time1; // Reset time display
    correct.innerHTML = 0; // Reset correct inputs
    wrong.innerHTML = 0; // Reset wrong inputs
    display.innerHTML = randomLetter(); // Reset random letter

    process = setInterval(function () {
        time1++;
        time.innerHTML = time1;

        if (time1 >= 6) {
            alert("Your time is over!");
            clearInterval(process);
            time.innerHTML = 0;
            process = null; // Ensure timer stops
        }
    }, 1000);
}

function start() {
    if (!process) { // Start only if no active timer
        pressed();
    }
}

document.getElementById('display').addEventListener('keyup', function (e) {
    if (display.innerHTML === e.key) {
        correct.innerHTML++;
    } else {
        wrong.innerHTML++;
    }
    display.innerHTML = randomLetter();
});

play.onclick = pressed;
start1.onclick = start;