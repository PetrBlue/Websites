function calculate() {
    let usersNumber = document.getElementById("userN").value;
    if (usersNumber > 30) {
        usersNumber = 30;
        document.getElementById("userN").value = usersNumber;
    } else if (usersNumber < 1) {
        usersNumber = 1;
        document.getElementById("userN").value = usersNumber;
    }
    let players = document.getElementById("userN").value;
    let maxPoints;
    let tasks = 9;
    if (document.getElementById("tenthTask").checked == true) {
        tasks = 10;
    }
    if (players > 3) {
        maxPoints = (320 + 350 + 375 + (400 * (players - 3))) * tasks;
    } else if (players == 1) {
        maxPoints = 320 * tasks;
    } else if (players == 2) {
        maxPoints = (320 + 350) * tasks;
    } else if (players == 3) {
        maxPoints = (320 + 350 + 370) * tasks;
    }
    document.getElementById("points").textContent = "Max points: " + maxPoints;
}