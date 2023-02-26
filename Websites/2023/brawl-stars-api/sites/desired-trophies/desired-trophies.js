let myData;
let trophies;
let currentTrophies;
let brawlerTrophies;
let tag = location.href.split('?')[1].split('=')[1].split('&')[0];
let desiredTrophies = location.href.split('?')[1].split('=')[2];

console.log(tag, desiredTrophies);
makeRequest(tag);

async function makeRequest(playerTag) {
    const data = await fetch(`https://bsapi.petrblue.repl.co/?playertag=${playerTag}`)
    myData = await data.json();
    console.log(myData);
    DoStuff(myData);
}
function DoStuff(data) {
    brawlers = data.brawlers;
    var brawlersSorted = brawlers.sort((a, b) => b.trophies - a.trophies);
    //profile
    var msg = '<div class="profile"><img src="https://cdn-old.brawlify.com/profile/' + data.icon.id + '.png" width="160" height="160"><div class="profile-names">' + '<p  style="color: #' + data.nameColor.slice(4) + ';">' + data.name + '</p>';
    msg += '</div></div>';
    document.getElementById("container").innerHTML += msg;
    //trophy section
    trophies = data.trophies;
    currentTrophies = data.trophies;
    var msg = '<div id="trophy-section" class="trophy-section"><p id="current-trophies"></p><img src="../../images/general/trophy.png" width="35" height="30"><p id="final-trophies"></p><img src="../../images/general/trophy.png" width="35" height="30"><p id="trophies-to-push"></p><img src="../../images/general/trophy.png" width="35" height="30"><p id="trophies-for-brawlers"></p><img src="../../images/general/trophy.png" width="35" height="30"></div>';
    document.getElementById("container").innerHTML += msg;
    //brawlers
    var brawlersTrophiesAdded = CalculateTrophies(desiredTrophies, brawlersSorted);
    brawlerTrophies = brawlersTrophiesAdded[brawlersTrophiesAdded.length - 1].trophies;
    //data into trophy segment
    document.getElementById("current-trophies").innerHTML = 'Current: ' + currentTrophies;
    document.getElementById("final-trophies").innerHTML = 'Final: ' + desiredTrophies;
    document.getElementById("trophies-to-push").innerHTML = 'To push: ' + (desiredTrophies - currentTrophies);
    document.getElementById("trophies-for-brawlers").innerHTML = 'Brawler: ' + brawlerTrophies;
}
function CalculateTrophies(totalTrophies, brawlersSorted) {
    var trophiesToPush = desiredTrophies - currentTrophies;
    for (let i = 0; i < trophiesToPush; i++) {
        brawlersSorted[brawlersSorted.length - 1].trophies++;
        var brawlersSorted = brawlers.sort((a, b) => b.trophies - a.trophies);
    }
    return brawlersSorted;
}