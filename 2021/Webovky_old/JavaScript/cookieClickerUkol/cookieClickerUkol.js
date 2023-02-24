let clicker = 0;
let multiplier = 0;
let coins = 0;
let multiplierOne = 5;
let multiplierOneBought = 0;
let multiplierTwo = 25;
let multiplierTwoBought = 0;
/*let multiplierThree = 10000;
let multiplierThreeBought = 0;*/

clicker = clicker * 1;


function xpPlus(){
    if(coins <= 10000){
        coins++;
        document.querySelector(".coins-shower").innerHTML = coins;
    }else{
        alert('Game Over, Vyhrál jsi.')
    }
}
    
function multiplierOneFunction(){
    if(coins <= 10000){
        if(coins >= multiplierOne){
            coins -= multiplierOne;
            multiplierOneBought++;
            multiplierOne += multiplierOne/2;
            multiplierOne = Math.floor(multiplierOne);
            multiplier+=1;
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
             async function idk() {
                while(multiplier>0) {
                    if(coins >= 10000){
                        break
                    }
                    if(coins <= 10000){
                    coins += multiplier;
                    document.querySelector(".coins-shower").innerHTML = coins;
                    await sleep(2000);
                    }
                }
            }
            idk();
            document.querySelector(".coins-shower").innerHTML = coins;
            document.querySelector(".upgrade-one-cost").innerHTML = multiplierOne;
            document.querySelector(".upgrade-one-count").innerHTML = multiplierOneBought;
            document.querySelector(".cps-shower").innerHTML = multiplier;
        }else{
            alert('Not enough coins')
        }
    }else{
        alert('Game Over, Vyhrál jsi.')
    }
}
  
function multiplierTwoFunction(){
    if(coins <= 10000){
        if(coins >= multiplierTwo){
                coins -= multiplierTwo;
                multiplierTwoBought++;
                multiplierTwo += multiplierTwo/2;
                multiplierTwo = Math.floor(multiplierTwo);
                multiplier += 5;
                function sleep2(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
                 async function idk2() {
                    while(multiplier>0){
                        if(coins >= 10000){
                            break
                        }
                        if(coins <= 10000){
                            coins += multiplier;
                            document.querySelector(".coins-shower").innerHTML = coins;
                            await sleep2(2000);
                        }
                    }
                }
                idk2();
                document.querySelector(".coins-shower").innerHTML = coins;
                document.querySelector(".upgrade-two-cost").innerHTML = multiplierTwo;
                document.querySelector(".upgrade-two-count").innerHTML = multiplierTwoBought;
                document.querySelector(".cps-shower").innerHTML = multiplier;
            }else{
                alert('Not enough coins')
            }
    }else{
        alert('Game Over, Vyhrál jsi.')
    }
}
//disabled
function multiplierThreeFunction(){
    //10000, jen disabled
    if(coins < -1){
        if(coins >= multiplierThree){
            coins -= multiplierThree;
            multiplierThreeBought++;
            multiplierThree *= 1.5;
            multiplierThree = Math.floor(multiplierThree);
            multiplier += 100;
            document.querySelector(".coins-shower").innerHTML = coins;
            document.querySelector(".upgrade-three-cost").innerHTML = multiplierThree;
            document.querySelector(".upgrade-three-count").innerHTML = multiplierThreeBought;
            document.querySelector(".cps-shower").innerHTML = multiplier;
        }else{
            alert('Not enough coins');
        }
    }else{
        alert('Coming Soon...')
    }
}