let diff = Math.floor((new Date() - new Date(2022, 05, 17, 0, 0, 0, 0)) / (86400000));
let plankTime = 30 + (diff / 100);
document.querySelector("#days").textContent = plankTime;
document.querySelector("#xd").textContent = "Days: " + (diff + 1);
console.log(diff, plankTime)

function complete() {
    //local storage add checkbox for complete
}