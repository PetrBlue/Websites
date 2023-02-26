let theme = "dark";

if (window.location.pathname.includes('index.html') || window.location.pathname == '/') {
    (async () => {
        let body = { visit: 1, uniqueVisit: 0 }
        console.log("ok");
        if (localStorage.getItem('visited') == null) {
            body.uniqueVisit = 1
            localStorage.setItem('visited', 'true');
        }
        const response = await fetch('https://countingVisits.petrblue.repl.co', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        let temp = await response.json();
        let parsed = temp;
        document.querySelector(".visits-number").textContent = "visits: " + parsed.visits;
        document.querySelector(".visits-number2").textContent = "unique visits: " + parsed.uniqueVisits;
    })();
}
/*function visitsNumberTotalUpdate(response){
    document.querySelector(".visits-number").textContent = "visits: " + response;
    console.log("fetch done");
}*/
/*  
function visitsNumberUniqueUpdate(){
    (async () => {
        const response = await fetch('https://countingvisits.petrblue.repl.co', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{"visit":1,"uniqueVisit":1}'
        });
        console.log(await response.json());
    })();
      
    if(localStorage.getItem('visited') == null){
    fetch('https://uniquevisits.petrblue.repl.co/')
    .then(resp => resp.json());
        localStorage.setItem('visited', 'true');
        console.log("first time");
        document.querySelector(".visits-number2").textContent = "visits: " + "";
        console.log("fetch done");
    }else{
        console.log("Not first");
        document.querySelector(".visits-number2").textContent = "unique visits: " + uniqueVisits;
    }
}*/
let userTheme = localStorage.getItem('userTheme') || "dark";
if (userTheme == "dark") {
    console.log("loaded dark theme");
    theme = "dark";
    document.documentElement.style.setProperty('--text-color', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--header-color', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--header-text-color', 'rgb(190, 37, 255)');
    document.documentElement.style.setProperty('--background-color', 'rgb(40, 40, 40)');
    document.documentElement.style.setProperty('--animation-color', 'rgb(240, 87, 255)');
    document.getElementById("darkmode-toggle").checked = false;
} else {
    console.log("loaded light theme");
    theme = "light";
    document.documentElement.style.setProperty('--text-color', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--header-color', 'rgb(60, 60, 60)');
    document.documentElement.style.setProperty('--header-text-color', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--background-color', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--animation-color', 'rgb(20, 20, 20)');
    document.getElementById("darkmode-toggle").checked = true;
}

/*localStorage.setItem('userTheme', 'light');
localStorage.setItem('userTheme', 'dark');
localStorage.getItem('userTheme');*/

function changeTheme() {
    console.log("im here");
    if (theme == "light") {
        theme = "dark";
        console.log("setting theme to dark");
        localStorage.setItem('userTheme', 'dark');
        document.documentElement.style.setProperty('--text-color', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--header-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--header-text-color', 'rgb(190, 37, 255)');
        document.documentElement.style.setProperty('--background-color', 'rgb(40, 40, 40)');
        document.documentElement.style.setProperty('--animation-color', 'rgb(240, 87, 255)');
        var welcomeText = document.getElementById("svg-nadpis").querySelectorAll("mask, svg, rect, path");
        for (var i = 0; i < welcomeText.length; i++) {
            console.log("l");
            welcomeText[i].style.animation = "drawn-in 3s forwards ease-in-out";
        }
    } else {
        theme = "light";
        console.log("setting theme to light");
        localStorage.setItem('userTheme', 'light');
        document.documentElement.style.setProperty('--text-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--header-color', 'rgb(60, 60, 60)');
        document.documentElement.style.setProperty('--header-text-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--background-color', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--animation-color', 'rgb(20, 20, 20)');
        var welcomeText = document.getElementById("svg-nadpis").querySelectorAll("mask, svg, rect, path");
        for (var i = 0; i < welcomeText.length; i++) {
            console.log("l");
            welcomeText[i].style.animation = "drawn-in 3s forwards ease-in-out";
        }
    }
}
if (window.location.pathname.includes('index.html') || window.location.pathname == '/') {
    document.getElementById('darkmode-toggle').addEventListener("click", changeTheme);
}