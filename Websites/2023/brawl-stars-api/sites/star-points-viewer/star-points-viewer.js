let myData;
let myOtherData;
let clubData;
let brawlers;
let brawlersSorted;
let starPoints = 0;
let tagString = location.href.split('?')[1].split('=')[1];
console.log(tagString);
makeRequest(tagString);

async function makeRequest(playerTag) {
  const data = await fetch(`https://bsapi.petrblue.repl.co/?playertag=${playerTag}`)
  myData = await data.json();
  console.log(myData);
  DoStuff(myData);
}
async function DoStuff(data){
  brawlers = data.brawlers;
  console.log(brawlers);
  var brawlersSorted = brawlers.sort((a, b) => b.trophies - a.trophies);
  console.log(brawlersSorted);
  
  //profile
  var msg = '<div class="profile"><img src="https://cdn-old.brawlify.com/profile/' + data.icon.id + '.png" width="80" height="80"><div class="profile-name">' + '<p id="profile-name" style="color: #' + data.nameColor.slice(4) + ';"></p></div></div>';
  document.getElementById("container").innerHTML += msg;
  document.getElementById('profile-name').textContent = data.name;

  //total star points
  for(let i = 0; i < brawlersSorted.length; i++){
    starPoints += ReturnStarPointReward(brawlersSorted[i].trophies);
  }
  var msg = '<div class="stats"><p>' + starPoints + '</p><img src="../../images/general/star-point.png" width="50" height="50"></div>';
  document.getElementById("container").innerHTML += msg;
  
  //brawlers
  for(let i = 0; i < brawlersSorted.length; i++){
    var msg = "<div class='brawler-data' style='background-color:" + ReturnColor(ReturnRank(brawlersSorted[i].trophies)) + "'>";
    msg += '<img src="../../images/portrait/' + brawlersSorted[i].name.toLowerCase() + '.png" alt="' + brawlersSorted[i].name +  '" width="96" height="80">';
    msg += '<p>' + ReturnStarPointReward(brawlersSorted[i].trophies) + '</p>';
    msg += '<img src="../../images/general/star-point.png" width="50" height="50">';
    msg += "</div>";
    document.getElementById("container").innerHTML += msg;
  }
}
function ReturnColor(rank){
  if(rank >= 0 && rank < 5){
    return "rgba(214,85,6,250)";
  }else if(rank >= 5 && rank < 10){
    return "rgba(185,186,243,250)";
  }else if(rank >= 10 && rank < 15){
    return "rgba(255,186,37,244)";
  }else if(rank >= 15 && rank < 20){
    return "rgba(2,191,236,250)";
  }else if(rank >= 20 && rank < 25){
    return "rgba(223,57,244,250)";
  }else if(rank >= 25 && rank < 30){
    return "rgba(65,229,125,245)";
  }else if(rank >= 30 && rank < 35){
    return "rgba(232,52,52,245)";
  }else if(rank == 35){
    return "rgba(76,56,149,245)";
  }
}
function ReturnStarPointReward(trophies){
  if(trophies < 500){
    return 0;
  }else if(trophies < 525){
    return 20;
  }else if(trophies < 550){
    return 50;
  }else if(trophies < 575){
    return 70;
  }else if(trophies < 600){
    return 80;
  }else if(trophies < 625){
    return 90;
  }else if(trophies < 650){
    return 100;
  }else if(trophies < 675){
    return 110;
  }else if(trophies < 700){
    return 120;
  }else if(trophies < 725){
    return 130;
  }else if(trophies < 750){
    return 140;
  }else if(trophies < 775){
    return 150;
  }else if(trophies < 800){
    return 160;
  }else if(trophies < 825){
    return 170;
  }else if(trophies < 850){
    return 180;
  }else if(trophies < 875){
    return 190;
  }else if(trophies < 900){
    return 200;
  }else if(trophies < 925){
    return 210;
  }else if(trophies < 950){
    return 220;
  }else if(trophies < 975){
    return 230;
  }else if(trophies < 1000){
    return 240;
  }else if(trophies < 1050){
    return 250;
  }else if(trophies < 1100){
    return 260;
  }else if(trophies < 1150){
    return 270;
  }else if(trophies < 1200){
    return 280;
  }else if(trophies < 1250){
    return 290;
  }else if(trophies < 1300){
    return 300;
  }else if(trophies < 1350){
    return 310;
  }else if(trophies < 1400){
    return 320;
  }else if(trophies < 1450){
    return 330;
  }else if(trophies < 1500){
    return 340;
  }else{
    return 350;
  }
}
function ReturnRank(trophies){
  if(trophies < 10){
    return 1;
  }else if(trophies < 20){
    return 2;
  }else if(trophies < 30){
    return 3;
  }else if(trophies < 40){
    return 4;
  }else if(trophies < 60){
    return 5;
  }else if(trophies < 80){
    return 6;
  }else if(trophies < 100){
    return 7;
  }else if(trophies < 120){
    return 8;
  }else if(trophies < 140){
    return 9;
  }else if(trophies < 160){
    return 10;
  }else if(trophies < 180){
    return 11;
  }else if(trophies < 220){
    return 12;
  }else if(trophies < 260){
    return 13;
  }else if(trophies < 300){
    return 14;
  }else if(trophies < 340){
    return 15;
  }else if(trophies < 380){
    return 16;
  }else if(trophies < 420){
    return 17;
  }else if(trophies < 460){
    return 18;
  }else if(trophies < 500){
    return 19;
  }else if(trophies < 550){
    return 20;
  }else if(trophies < 600){
    return 21;
  }else if(trophies < 650){
    return 22;
  }else if(trophies < 700){
    return 23;
  }else if(trophies < 750){
    return 24;
  }else if(trophies < 800){
    return 25;
  }else if(trophies < 850){
    return 26;
  }else if(trophies < 900){
    return 27;
  }else if(trophies < 950){
    return 28;
  }else if(trophies < 1000){
    return 29;
  }else if(trophies < 1050){
    return 30;
  }else if(trophies < 1100){
    return 31;
  }else if(trophies < 1150){
    return 32;
  }else if(trophies < 1200){
    return 33;
  }else if(trophies < 1250){
    return 34;
  }else{
    return 35;
  }
}