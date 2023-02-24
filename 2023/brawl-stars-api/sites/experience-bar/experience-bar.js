  let myData;
  let tagString = location.href.split('?')[1].split('=')[1];
  makeRequest(tagString);

  async function makeRequest(playerTag) {
    const data = await fetch(`https://bsapi.petrblue.repl.co/?playertag=${playerTag}`)
    myData = await data.json();
    DoStuff(myData);
  }
  async function DoStuff(data){
    console.log(data);
    //profile
    var msg = '<div class="profile"><img src="https://cdn-old.brawlify.com/profile/' + data.icon.id + '.png" width="160" height="160"><div class="profile-names">' + '<p id="profile-name"  style="color: #' + data.nameColor.slice(4) + ';"></p>';
    msg += '</div></div>';
    document.getElementById("container").innerHTML += msg;
    document.getElementById('profile-name').textContent = data.name;

    //experience
    ExperienceBar(data);
  }
  async function ExperienceBar(data){
    var msg = '<div class="experience-bar-2" id="exp-bar1"><img src="../../images/general/experience.png" width="48" height="54"><p>' + data.expLevel + '</p><p id="decimal-point"></p></div>';
    msg += '<div class="experience-bar" id="exp-bar2"><div class="outer-layer">';
    msg += '<div class="inner-layer">';
    msg += '<div class="overlay" style="width: ';

    var leftXP = data.expPoints;
    for(let i = 1; i < data.expLevel; i++){
      leftXP -= (i + 3) * 10;
    }

    var widthPercentage = (leftXP / ((data.expLevel + 3) * 10)) * 100;
    msg += widthPercentage;
    msg += '%">';
    msg += '</div><p class="exp-data">';
    msg += leftXP + '/' + ((data.expLevel + 3) * 10);
    msg += '</p>';
    msg += '<p class="exp-percent">(' + widthPercentage.toFixed(2) + '%)</p>'
    msg += '</div></div>';
    document.getElementById("container").innerHTML += msg;
    document.getElementById("decimal-point").innerHTML = "." + Math.floor(widthPercentage * 100);
    document.getElementById('exp-bar2').style.height = document.getElementById('exp-bar1').offsetHeight + 'px';
  }