function ZahajitPohyb(){
    const x = document.querySelector(".input-x").value
    const y = document.querySelector(".input-y").value
    const z = document.querySelector(".input-rotate").value
    Pohyb(x,y,z)
}
function Pohyb(x,y,z){
    let kostka = document.querySelector(".ctverec")
    kostka.style.left = Number(x) + "px";
    kostka.style.top = Number(y) + "px";
    kostka.style.transform = "rotate(" + Number(z) + "deg)";
}
document.addEventListener('click', function(a) {
    let body = document.querySelector('body');
    let kostka2 = document.querySelector('.ctverec');
    let left = a.offsetX;
    let top = a.offsetY;
    kostka2.style.left = left + 'px';
    kostka2.style.top = top + 'px';
  });