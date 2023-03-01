let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stopTimer = document.getElementById('stop');
let reset = document.getElementById('reset');

let currentTime = 0;
var interval;

start.addEventListener("click", () => {
    interval = setInterval(addSecond, 1000);
})

stopTimer.addEventListener("click", () => {
    clearInterval(interval);
})

reset.addEventListener("click", () => {
    clearInterval(interval);
    currentTime = 0;
    timer.textContent = currentTime;
})

function addSecond() {
    currentTime += 1;
    timer.textContent = currentTime;
}