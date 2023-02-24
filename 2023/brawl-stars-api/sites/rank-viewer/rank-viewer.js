let myData;
let myOtherData;
let clubData;
let brawlers;
let brawlersSorted;
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
  var brawlersSorted = brawlers.sort((a, b) => b.rank-a.rank);
  console.log(brawlersSorted);
  
  //profile
  const hexString = data.nameColor;
  const hexColor = hexString.slice(4);

  var msg = '<div class="profile"><img src="https://cdn-old.brawlify.com/profile/' + data.icon.id + '.png" width="80" height="80"><div class="profile-name">' + '<p id="profile-name" style="color: #' + hexColor + ';"></p></div></div>';
  document.getElementById("container").innerHTML += msg;
  document.getElementById('profile-name').textContent = data.name;

  //club
  if(Object.keys(data.club).length != 0){
    var clubUrl = 'https://getclubinfo.petrblue.repl.co/?clubtag=' + data.club.tag.split('#')[1];
    var fetchedClubData = await fetch(clubUrl);
    clubData = await fetchedClubData.json();
    console.log(fetchedClubData, clubData);
    var msg = '<div class="club"><img src="https://cdn-old.brawlify.com/club/' + clubData.badgeId + '.png" width="72" height="80"><div class="club-name"><p id="club-name"></p></div></div>';
    document.getElementById("container").innerHTML += msg;
    document.getElementById('club-name').textContent = clubData.name;
  }

  //trophies
  var msg = '<div class="stats"><p>' + data.trophies + '</p><img src="../../images/general/trophy.png"></div>';
  document.getElementById("container").innerHTML += msg;

  //experience
  var msg = '<div class="stats"><p>' + data.expLevel + '</p><img src="../../images/general/experience.png" width="48" height="54"></div>';
  document.getElementById("container").innerHTML += msg;
  
  //brawlers unlocked
  const fetchedData = await fetch(`https://getbrawlers.petrblue.repl.co`)
  myOtherData = await fetchedData.json();
  var msg = '<div class="stats"><p id="unlocked-brawlers">' + myData.brawlers.length + '/'+ myOtherData.items.length + '</p><img src="../../images/general/lock.png" alt="Unlocked" width="47" height="60"></div>';
  document.getElementById("container").innerHTML += msg;

  //3v3
  var msg = '<div class="stats"><p>' + data['3vs3Victories'] + '</p><img src="../../images/general/3v3.png" width="47" height="44"></div>';
  document.getElementById("container").innerHTML += msg;

  //solo
  var msg = '<div class="stats"><p>' + data.soloVictories + '</p><img src="../../images/general/solo.png" width="53" height="60"></div>';
  document.getElementById("container").innerHTML += msg;
 
  //duo
  var msg = '<div class="stats"><p>' + data.duoVictories + '</p><img src="../../images/general/duo.png" width="51" height="51"></div>';
  document.getElementById("container").innerHTML += msg;
//177 180
  for(let i = 0; i < brawlersSorted.length; i++){
    var msg = "<div class='brawler-data' style='background-color:" + ReturnColor(brawlersSorted[i].rank) + "'>";
    msg += '<img src="../../images/portrait/' + brawlersSorted[i].name.toLowerCase() + '.png" alt="' + brawlersSorted[i].name +  '" width="96" height="80">';
    
    msg += '<img src="../../images/rank-pngs/rank' + brawlersSorted[i].rank + '.png" width="56" height="63">';
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