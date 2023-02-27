var settings = document.getElementById("settings");
var settingsMenu = document.getElementById("settings-menu");
var exitMenu = document.getElementById("exit-btn");
settings.addEventListener("click", function () {
    settingsMenu.classList.remove("animate-out");
    settings.classList.add("animate");
    settingsMenu.style.zIndex = "5";
    settingsMenu.classList.add("animate");
    setTimeout(removeAnim, 1000);
});
function removeAnim() {
    settings.classList.remove("animate");
}
exitMenu.addEventListener("click", function () {
    settingsMenu.classList.remove("animate");
    settingsMenu.classList.add("animate-out");
    setTimeout(removeAnim2, 1000);
});
function removeAnim2() {
    settingsMenu.classList.remove("animate-out");
    settingsMenu.style.zIndex = "-5";
}

//todo
let timer = document.getElementById('timer');
let pomodoroMinutes = 20;
let breakMinutes = 10;
let min = 20;
let sec = 0;
let isBreak = false;
let isRunning = false;
let level = 1; //load this by ls
let secondsTotal = 0; //add to this by ls, on load load levels and add value to milestone
let firstMilestone = 60;
let addedMilestone = 20;
let milestone = 60;
function PreUpdate() {
    if (isRunning) {
        isRunning = false;
        document.getElementById('pause').textContent = "start";
    } else {
        isRunning = true;
        document.getElementById('pause').textContent = "pause";
        Update();
    }
}
function Update() {
    if (!isRunning) {
        return;
    }
    if (sec == 0) {
        sec = 59;
        if (min != 0) {
            min--;
        }
    } else {
        sec--;
    }
    secondsTotal++;
    if (secondsTotal == milestone) {
        level++;
        milestone += addedMilestone;

    }
    UpdateUi();
    if (min != 0 || sec != 0) {
        setTimeout(Update, 1000);
    } else {
        if (isBreak) {
            min = pomodoroMinutes;
            isBreak = false;
            UpdateUi();
            document.getElementById('text').textContent = "pomodoro";
            setTimeout(Update, 1000);
        } else {
            min = breakMinutes;
            isBreak = true;
            UpdateUi();
            document.getElementById('points').textContent += " •";
            document.getElementById('text').textContent = "break";
            setTimeout(Update, 1000);
        }
    }
}
function Save() {
    var pomMin = document.getElementById('pomodoro-pomodoro').value;
    var breakMin = document.getElementById('pomodoro-break').value;
    pomodoroMinutes = pomMin;
    breakMinutes = breakMin;
    min = pomodoroMinutes;
    sec = 0;
    isRunning = false;
    UpdateUi();
    document.getElementById('pause').textContent = "start";
}
function UpdateUi() {
    let height = secondsTotal / milestone
    if (min < 10) {
        if (sec < 10) {
            timer.textContent = "0" + min + ":0" + sec;
            document.title = "0" + min + ":0" + sec + " | Pomodoro";
        } else {
            timer.textContent = "0" + min + ":" + sec;
            document.title = "0" + min + ":" + sec + " | Pomodoro";
        }
    } else {
        if (sec < 10) {
            timer.textContent = min + ":0" + sec;
            document.title = min + ":0" + sec + " | Pomodoro";
        } else {
            timer.textContent = min + ":" + sec;
            document.title = min + ":" + sec + " | Pomodoro";
        }
    }
}
function PauseTimer() {
    isRunning = false;
    document.getElementById('pause').textContent = "start";
}