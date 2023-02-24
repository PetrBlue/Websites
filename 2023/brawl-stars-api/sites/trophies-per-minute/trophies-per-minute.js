let myData;
let trophies;
let currentTrophies;
let brawlerTrophies;
let winrate = location.href.split('?')[1].split('=')[1].split('&')[0];
let trophiesForWin = location.href.split('?')[1].split('=')[2].split('&')[0];
let trophiesForLoss = location.href.split('?')[1].split('=')[3].split('&')[0];

DoStuff();

function DoStuff() {
    winrate /= 100;
    result = (winrate * trophiesForWin) - (1 - winrate) * trophiesForLoss;
    document.getElementById('container').innerHTML += '<div><p class="winrate">Winrate: ' + winrate * 100 + '%</p></div>';
    document.getElementById('container').innerHTML += '<div><p>Trophies for win: ' + trophiesForWin + '</p><img src="../../images/general/trophy.png" width="35" height="30"></div>';
    document.getElementById('container').innerHTML += '<div><p>Trophies for loss: ' + trophiesForLoss + '</p><img src="../../images/general/trophy.png" width="35" height="30"></div>';
    var temp = 0;
    if(!Number.isInteger(result)){
        if(result.toString().split(".")[1].length > 4){
            temp = 4;
        }else{
            temp = result.toString().split(".")[1].length;
        }
    }
    document.getElementById('container').innerHTML += '<div><p>Trophies per match: ' + Number(result.toFixed(temp)) + '</p><img src="../../images/general/trophy.png" width="35" height="30"></div>';
    result *= 24;
    if(!Number.isInteger(result)){
        if(result.toString().split(".")[1].length > 4){
            temp = 4;
        }else{
            temp = result.toString().split(".")[1].length;
        }
    }
    document.getElementById('container').innerHTML += '<div><p>Trophies per hour: ' + Number(result.toFixed(temp)) + '</p><img src="../../images/general/trophy.png" width="35" height="30"></div>';
    result /= 60;
    if(!Number.isInteger(result)){
        if(result.toString().split(".")[1].length > 4){
            temp = 4;
        }else{
            temp = result.toString().split(".")[1].length;
        }
    }
    document.getElementById('container').innerHTML += '<div><p>Trophies per minute: ' + Number(result.toFixed(temp)) + '</p><img src="../../images/general/trophy.png" width="35" height="30"></div>';
    result /= 60;
    if(!Number.isInteger(result)){
        if(result.toString().split(".")[1].length > 4){
            temp = 4;
        }else{
            temp = result.toString().split(".")[1].length;
        }
    }
    document.getElementById('container').innerHTML += '<div><p>Trophies per second: ' + Number(result.toFixed(temp)) + '</p><img src="../../images/general/trophy.png" width="35" height="30"></div>';
}