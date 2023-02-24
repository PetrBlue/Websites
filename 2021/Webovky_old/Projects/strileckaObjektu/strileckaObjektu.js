let score = 0;
let stavHry = false;
let delay = 1000;
let pocet = 0;
function startHry(){
    console.log("loool")
    let btn = document.querySelector(".start-btn")
    btn.style.display = "none";
    stavHry = true;
    playHry()
}
function playHry(){
    console.log("lmaooo")
    setInterval(spawnDiv, delay)
}
function spawnDiv(){
    console.log(delay)
    let novyDiv =  document.createElement("div")
    novyDiv.classList.add("novy-div")
    novyDiv.onclick = "znicitObjekt()";
    pocet++
    let sirka = Math.floor(Math.random()* window.screen.availWidth)
    let vyska = Math.floor(Math.random()* window.screen.availHeight)
    novyDiv.style.left = sirka + "px";
    novyDiv.style.top = vyska + "px";
    document.body.appendChild(novyDiv)
    delay--
}
function konecHry(){
    alert("Nooooooooob")
}
function znicitObjekt(x){
    removeChild(x);
}
function nothing(){
    console.log("I do absolutely nothing!")
}