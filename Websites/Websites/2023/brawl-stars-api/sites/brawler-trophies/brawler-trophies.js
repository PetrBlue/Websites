let myData;
let trophies;
let finalTrophies;
let tag = location.href.split('?')[1].split('=')[1].split('&')[0];
let desiredTrophies = location.href.split('?')[1].split('=')[2];

makeRequest(tag);

async function makeRequest(playerTag) {
    const data = await fetch(`https://bsapi.petrblue.repl.co/?playertag=${playerTag}`)
    myData = await data.json();
    console.log(myData);
    DoStuff(myData);
}
function DoStuff(data){
    brawlers = data.brawlers;
    var brawlersSorted = brawlers.sort((a, b) => b.trophies-a.trophies);
    //profile
    var msg = '<div class="profile"><img src="https://cdn-old.brawlify.com/profile/' + data.icon.id + '.png" width="80" height="80"><div class="profile-names">' + '<p id="profile-name" style="color: #' + data.nameColor.slice(4) + ';"></p>';
    msg += '<p id="club-name"></p></div></div>';
    document.getElementById("container").innerHTML += msg;
    document.getElementById('profile-name').textContent = data.name;
    document.getElementById('club-name').textContent = data.club.name;
    //trophy section
    trophies = data.trophies;
    finalTrophies = data.trophies;
    var msg = '<div id="trophy-section" class="trophy-section"><p id="current-trophies"></p><img src="../../images/general/trophy.png" width="35" height="30"><p id="final-trophies"></p><img src="../../images/general/trophy.png" width="35" height="30"></div>';
    document.getElementById("container").innerHTML += msg;
    //brawlers
    for(let i = 0; i < brawlersSorted.length; i++){
        if(brawlersSorted[i].trophies < desiredTrophies){
            var trophiesMissing = desiredTrophies - brawlersSorted[i].trophies;
            var msg = "<div class='brawler-data'>";
            msg += '<img src="../../images/portrait/' + brawlersSorted[i].name.toLowerCase() + '.png" width="96" height="80">';
            msg += '<p>' + trophiesMissing + "</p>";
            msg += '<img src="../../images/general/trophy.png">';
            msg += "</div>";
            document.getElementById("container").innerHTML += msg;
            finalTrophies += trophiesMissing;
        }
    }
    //data into trophy segment
    document.getElementById("current-trophies").innerHTML = 'Current: ' + data.trophies;
    document.getElementById("final-trophies").innerHTML = 'Final: ' + finalTrophies;
}