let urNum = "";
let rndNum;
function generate(){
    rndNum = Math.floor(Math.random()*10);
    document.querySelector(".ur-num").textContent = "Your Number: " + urNum + rndNum;
    console.log("BEZ DOPICE")
}
function accept(){
    if(urNum.length<10){
        urNum += rndNum;
    }
    else{
        alert("Max limit reached.");
    }
}