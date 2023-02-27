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
  var brawlersSorted = brawlers.sort((a, b) => b.power-a.power);
  console.log(brawlersSorted);
  
  //profile
  var msg = '<div class="profile"><img src="https://cdn-old.brawlify.com/profile/' + data.icon.id + '.png" width="80" height="80"><div class="profile-name">' + '<p id="profile-name" style="color: #' + data.nameColor.slice(4) + ';"></p></div></div>';
  document.getElementById("container").innerHTML += msg;
  document.getElementById('profile-name').textContent = data.name;

  //brawlers
  const fetchedData = await fetch(`https://getbrawlers.petrblue.repl.co`)
  myOtherData = await fetchedData.json();
  myOtherData = myOtherData.items;
  console.log(myOtherData);
  let tempArray = {};
  for(let i = 0; i < brawlersSorted.length; i++){
    for(let j = 0; j < myOtherData.length; j++){
        if(brawlersSorted[i].name == myOtherData[j].name){
            tempArray[i] = myOtherData[j];
            break;
        }
    }
  }
  myOtherData = tempArray;
  
  for(let i = 0; i < brawlersSorted.length; i++){
    var msg = "<div class='brawler-data' style='background-color:" + ReturnColor(brawlersSorted[i].power) + "'>";
    msg += '<img src="../../images/portrait/' + brawlersSorted[i].name.toLowerCase() + '.png" alt="' + brawlersSorted[i].name +  '" width="96" height="80">';
    msg += '<div class="power-level"><p>' + brawlersSorted[i].power + '</p>';
    msg += '<img src="../../images/general/power-point.png" width="42" height="45"></div>';
    msg += '<div class="gadgets">';
    for(let j = 0; j < myOtherData[i].gadgets.length; j++){
        if(brawlersSorted[i].gadgets[j] != undefined){
            msg += '<img src="../../images/general/gadget.png" width="39" height="40">';
        }else{
            msg += '<img src="../../images/general/gadget-missing.png" width="39" height="40">';
        }
    }
    msg += '</div><div class="star-powers">';
    for(let j = 0; j < myOtherData[i].starPowers.length; j++){
        if(brawlersSorted[i].starPowers[j] != undefined){
            msg += '<img src="../../images/general/star-power.png" width="40" height="40">';
        }else{
            msg += '<img src="../../images/general/star-power-missing.png" width="40" height="40">';
        }
    }
    msg += '</div><div class="gears">';
    for(let j = 0; j < brawlersSorted[i].gears.length; j++){
        if(brawlersSorted[i].gears[j] != undefined){
            msg += '<img src="https://cdn-old.brawlify.com/gears/' +  brawlersSorted[i].gears[j].id + '.png" width="40" height="40">';
        }else{
            msg += '<img src="../../images/general/star-power-missing.png" width="40" height="40">';
        }
    }
    msg += '</div>';
    document.getElementById("container").innerHTML += msg;
  }
}
function ReturnColor(level){
    if(level < 7){
        return 'rgba(2,191,236,250)';
    }else if(level < 9){
        return 'rgba(65,229,125,245)';
    }else if(level == 9){
        return 'rgba(255,186,37,244)';
    }else if(level <= 11){
        return 'rgba(76,56,149,245)';
    }
}