let level = 1;
let clicker = 1;
let multiplier = 1;
let nextLevel = 20;

//math.floor aby to nebylo desetinne cislo

clicker = clicker * 1;

function xpPlus(){
    clicker = clicker + multiplier;
    if(clicker >= nextLevel){
        clicker = 0;
        nextLevel = Math.floor(nextLevel * 1.25);
        document.querySelector(".xp-required").innerHTML = nextLevel;
        level++;
        document.querySelector(".level-shower").innerHTML = level;
        if(level%10===0){
            multiplier = multiplier * 10;
        }
    }
    document.querySelector(".clicker").innerHTML = clicker;
}