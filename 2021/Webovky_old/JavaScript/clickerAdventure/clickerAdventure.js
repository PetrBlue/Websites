let level = 1;
let clicker = 0;
let multiplier = 1;
let nextLevel = 20;
let coins = 0;
let multiplierOne = 100;
let multiplierOneBought = 0;
let multiplierTwo = 1000;
let multiplierTwoBought = 0;
let multiplierThree = 10000;
let multiplierThreeBought = 0;

clicker = clicker * 1;

function xpPlus(){
    clicker = clicker + multiplier;
    coins = coins + multiplier;
    if(clicker >= nextLevel){
        clicker = 0;
        nextLevel = Math.floor(nextLevel * 2.5);
        document.querySelector(".xp-required").innerHTML = nextLevel;
        level++;
        document.querySelector(".level-shower").innerHTML = level;
    }
    document.querySelector(".clicker").innerHTML = clicker;
    document.querySelector(".coins-shower").innerHTML = coins;
}

function multiplierOneFunction(){
    if(coins >= multiplierOne){
        coins -= multiplierOne;
        multiplierOneBought++;
        multiplierOne *= 1.5;
        multiplierOne = Math.floor(multiplierOne);
        multiplier++;
        document.querySelector(".coins-shower").innerHTML = coins;
        document.querySelector(".upgrade-one-cost").innerHTML = multiplierOne;
        document.querySelector(".upgrade-one-count").innerHTML = multiplierOneBought;
        document.querySelector(".cpc-shower").innerHTML = multiplier;
    }else{
        alert('Not enough coins')
    }
}

function multiplierTwoFunction(){
    if(coins >= multiplierTwo){
        coins -= multiplierTwo;
        multiplierTwoBought++;
        multiplierTwo *= 1.5;
        multiplierTwo = Math.floor(multiplierTwo);
        multiplier += 10;
        document.querySelector(".coins-shower").innerHTML = coins;
        document.querySelector(".upgrade-two-cost").innerHTML = multiplierTwo;
        document.querySelector(".upgrade-two-count").innerHTML = multiplierTwoBought;
        document.querySelector(".cpc-shower").innerHTML = multiplier;
    }else{
        alert('Not enough coins')
    }
}

function multiplierThreeFunction(){
    if(coins >= multiplierThree){
        coins -= multiplierThree;
        multiplierThreeBought++;
        multiplierThree *= 1.5;
        multiplierThree = Math.floor(multiplierThree);
        multiplier += 100;
        document.querySelector(".coins-shower").innerHTML = coins;
        document.querySelector(".upgrade-three-cost").innerHTML = multiplierThree;
        document.querySelector(".upgrade-three-count").innerHTML = multiplierThreeBought;
        document.querySelector(".cpc-shower").innerHTML = multiplier;
    }else{
        alert('Not enough coins');
    }
}