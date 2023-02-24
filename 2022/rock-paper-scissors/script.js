let pScore = 0;
let aiScore = 0;
pScore = localStorage.getItem("playerScore");
aiScore = localStorage.getItem("artificialInteligenceScore");
UpdateScore(null);
//starts playing, after a user clicks on a button
function Play(input) {
    ClearColors();
    switch (input) {
        case "Rock":
            document.getElementById("rock-p").style.backgroundColor = "rgb(0,0,255)";
            break;
        case "Paper":
            document.getElementById("paper-p").style.backgroundColor = "rgb(0,0,255)";
            break;
        case "Scissors":
            document.getElementById("scissors-p").style.backgroundColor = "rgb(0,0,255)";
            break;
        default:
            alert("Bad input!");
            break;
    }
    let AIinput = AIchoose();
    WhoWins(input, AIinput);
}
//generates a random input
function AIchoose() {
    //1 = rock; 2 = paper; 3 = scissors
    var number = Math.floor(Math.random() * 3) + 1;
    switch (number) {
        case 1:
            document.getElementById("rock-ai").style.backgroundColor = "rgb(0,255,0)";
            return "Rock";
        case 2:
            document.getElementById("paper-ai").style.backgroundColor = "rgb(0,255,0)";
            return "Paper";
        case 3:
            document.getElementById("scissors-ai").style.backgroundColor = "rgb(0,255,0)";
            return "Scissors";
        default:
            AIchoose();
            break;
    }
}
//clears all of the changed colors
function ClearColors() {
    document.getElementById("rock-p").style.backgroundColor = "rgb(240,240,240)";
    document.getElementById("paper-p").style.backgroundColor = "rgb(240,240,240)";
    document.getElementById("scissors-p").style.backgroundColor = "rgb(240,240,240)";
    document.getElementById("rock-ai").style.backgroundColor = "rgb(240,240,240)";
    document.getElementById("paper-ai").style.backgroundColor = "rgb(240,240,240)";
    document.getElementById("scissors-ai").style.backgroundColor = "rgb(240,240,240)";
}
//chooses a winner
function WhoWins(P_Input, AI_Input) {
    if (P_Input == AI_Input) {
        document.getElementById("whowon").textContent = "Tie!";
    }
    if (P_Input == "Rock" && AI_Input == "Paper") {
        document.getElementById("whowon").textContent = "AI wins!";
        UpdateScore(false);
    }
    if (P_Input == "Paper" && AI_Input == "Rock") {
        document.getElementById("whowon").textContent = "You win!";
        UpdateScore(true);
    }
    if (P_Input == "Rock" && AI_Input == "Scissors") {
        document.getElementById("whowon").textContent = "You win!";
        UpdateScore(true);
    }
    if (P_Input == "Scissors" && AI_Input == "Rock") {
        document.getElementById("whowon").textContent = "AI wins!";
        UpdateScore(false);
    }
    if (P_Input == "Paper" && AI_Input == "Scissors") {
        document.getElementById("whowon").textContent = "AI wins!";
        UpdateScore(false);
    }
    if (P_Input == "Scissors" && AI_Input == "Paper") {
        document.getElementById("whowon").textContent = "You win!";
        UpdateScore(true);
    }
}
//updates the score
function UpdateScore(amount) {
    if (amount == false) {
        aiScore++;
    }
    if (amount == true) {
        pScore++;
    }
    localStorage.setItem("playerScore", pScore);
    localStorage.setItem("artificialInteligenceScore", aiScore);
    if (localStorage.getItem("playerScore") != null) {
        document.getElementById("score").textContent = "Score [" + pScore + ":" + aiScore + "]";
    }
}
//clears the score
function ClearScore() {
    aiScore = 0;
    pScore = 0;
    localStorage.setItem("playerScore", pScore);
    localStorage.setItem("artificialInteligenceScore", aiScore);
    document.getElementById("score").textContent = "Score [" + pScore + ":" + aiScore + "]";
}