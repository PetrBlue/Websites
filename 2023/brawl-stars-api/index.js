let myData;
async function UrlToRankViewer(){
    var tag = document.getElementById("tag-1").value;
    tag = tag.toUpperCase().replace(/O/g, "0").replace("#", "");
    let tagArray = tag.split('');
    if(tagArray[tagArray.length - 1] === ' '){
        tagArray.pop();
    }
    tag = tagArray.join('');
    if(await TagCheck(tag)){
        var loc = './sites/rank-viewer/rank-viewer.html?tag=' + tag;
        location.href = loc;
    }else{
        alert('Wrong tag.')
    }
}
async function UrlToBrawlerTrophies(){
    var tag = document.getElementById("tag-2").value;
    var desiredTrophies = document.getElementById("desired-trophies").value;
    tag = tag.toUpperCase().replace(/O/g, "0").replace("#", "");
    if(await TagCheck(tag)){
        var loc = './sites/brawler-trophies/brawler-trophies.html?tag=' + tag + '&desiredtrophies=' + desiredTrophies;
        location.href = loc;
    }else{
        alert('Wrong tag.')
    }
}
async function UrlToDesiredTrophies(){
    var tag = document.getElementById("tag-3").value;
    var desiredTrophies = document.getElementById("desired-total-trophies").value;
    tag = tag.toUpperCase().replace(/O/g, "0").replace("#", "");
    if(await TagCheck(tag)){
        var loc = './sites/desired-trophies/desired-trophies.html?tag=' + tag + '&desiredtrophies=' + desiredTrophies;
        location.href = loc;
    }else{
        alert('Wrong tag.')
    }
}
async function UrlToExperienceBar(){
    var tag = document.getElementById("tag-4").value;
    tag = tag.toUpperCase().replace(/O/g, "0").replace("#", "");
    if(await TagCheck(tag)){
        var loc = './sites/experience-bar/experience-bar.html?tag=' + tag;
        location.href = loc;
    }else{
        alert('Wrong tag.')
    }
}
async function UrlToTrophyViewer(){
    var tag = document.getElementById("tag-5").value;
    tag = tag.toUpperCase().replace(/O/g, "0").replace("#", "");
    if(await TagCheck(tag)){
        var loc = './sites/trophy-viewer/trophy-viewer.html?tag=' + tag;
        location.href = loc;
    }else{
        alert('Wrong tag.')
    }
}
async function UrlToTrophiesPerMinute(){
    var winrate = document.getElementById('winrate').value;
    var trophiesWin = document.getElementById('tpw').value;
    var trophiesLose = document.getElementById('tpl').value;
    var loc = './sites/trophies-per-minute/trophies-per-minute.html?winrate=' + winrate + '&tpw=' + trophiesWin + '&tpl=' + trophiesLose;
    location.href = loc;
}
async function UrlToBrawlerStats(){
    var tag = document.getElementById("tag-7").value;
    tag = tag.toUpperCase().replace(/O/g, "0").replace("#", "");
    let tagArray = tag.split('');
    if(tagArray[tagArray.length - 1] === ' '){
        tagArray.pop();
    }
    tag = tagArray.join('');
    if(await TagCheck(tag)){
        var loc = './sites/brawler-stats/brawler-stats.html?tag=' + tag;
        location.href = loc;
    }else{
        alert('Wrong tag.')
    }
}
async function UrlToCurrentRankViewer(){
    var tag = document.getElementById("tag-8").value;
    tag = tag.toUpperCase().replace(/O/g, "0").replace("#", "");
    let tagArray = tag.split('');
    if(tagArray[tagArray.length - 1] === ' '){
        tagArray.pop();
    }
    tag = tagArray.join('');
    if(await TagCheck(tag)){
        var loc = './sites/current-rank-viewer/current-rank-viewer.html?tag=' + tag;
        location.href = loc;
    }else{
        alert('Wrong tag.')
    }
}
async function UrlToStarPointsViewer(){
    var tag = document.getElementById("tag-9").value;
    tag = tag.toUpperCase().replace(/O/g, "0").replace("#", "");
    let tagArray = tag.split('');
    if(tagArray[tagArray.length - 1] === ' '){
        tagArray.pop();
    }
    tag = tagArray.join('');
    if(await TagCheck(tag)){
        var loc = './sites/star-points-viewer/star-points-viewer.html?tag=' + tag;
        location.href = loc;
    }else{
        alert('Wrong tag.')
    }
}
async function UrlToLostTrophies(){
    var tag = document.getElementById("tag-10").value;
    tag = tag.toUpperCase().replace(/O/g, "0").replace("#", "");
    let tagArray = tag.split('');
    if(tagArray[tagArray.length - 1] === ' '){
        tagArray.pop();
    }
    tag = tagArray.join('');
    if(await TagCheck(tag)){
        var loc = './sites/trophy-lost/trophy-lost.html?tag=' + tag;
        location.href = loc;
    }else{
        alert('Wrong tag.')
    }
}
async function TagCheck(tag) {
    if (tag.length < 3) return false;
    for (let i = 0; i < tag.length; i++) {
      if (!'0289CGJLPQRUVY'.includes(tag[i])){
        return false;
      }
    }
    makeRequest(tag);
    await wait(3500);
    if(myData.tag){
        return true;
    }else{
        return false;
    }
}
async function makeRequest(playerTag) {
    const data = await fetch(`https://bsapi.petrblue.repl.co/?playertag=${playerTag}`)
    myData = await data.json();
} 
function wait(ms) {
    return new Promise(async resolve => {
      setTimeout(function(){
        return resolve(ms);
      }, ms);
    });
}