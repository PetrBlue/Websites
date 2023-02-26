var day = document.querySelector(".day");

var startDate = new Date("2023-01-01");
var todaysDate = Date.now();
var endDate = new Date("2023-12-31");

var result = todaysDate - startDate;
result = Math.ceil(result / (24 * 60 * 60 * 1000));
day.textContent = "Day: " + result.toString();

var daysToGo = Math.ceil((endDate - todaysDate) / (24 * 60 * 60 * 1000));

var progress = 100 - (daysToGo / 3.65);
console.log(progress);
document.getElementById("progress-bar").style.width = progress + "%";
document.getElementById("progress-text").textContent = parseFloat(progress).toFixed(2) + "%";
document.getElementById("push-ups").textContent = result;
document.getElementById("squats").textContent = result;

var plankTime = result;
var plankMin = Math.floor(plankTime / 60);
var plankSec = plankTime % 60;

document.getElementById("plank").textContent = plankMin + "m " + plankSec + "s";