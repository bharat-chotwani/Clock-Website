const timerValue = document.getElementById("timer");
const startTimerBtn = document.getElementById("start-timer");
const stopTimerBtn = document.getElementById("stop-timer");

let count = 0;
let countStart;

function startCounting(){
countStart = setInterval(function counting(){
    count += 1;
    timerValue.textContent = count;
}, 1000)
};

function stopCounting(){
    clearInterval(countStart);
}

startTimerBtn.addEventListener("click", startCounting);
stopTimerBtn.addEventListener("click", stopCounting);