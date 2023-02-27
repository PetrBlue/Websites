Update();
function Update(){
    let buttonsPerLine = Math.floor(window.innerWidth / 50);
    let buttonsPerColumn = Math.floor(window.innerHeight / 50);
    console.log(buttonsPerLine, buttonsPerColumn);
    console.log(buttonsPerLine);
    document.getElementById('container').style.display = "grid";
    document.getElementById('container').style.gridTemplateColumns = "repeat(" + buttonsPerLine + ", auto)";
    let columns = buttonsPerColumn;
    let rndVal = Math.floor(Math.random() * columns * buttonsPerLine);

    console.log(rndVal);
    let temp = 0;
    for(let i = 0; i < columns; i++){
        for(let j = 0; j < buttonsPerLine; j++){
            temp++;
            var btn = '<button onclick="this.classList.add(`color`)"';
            if(temp === rndVal){
                btn += 'onclick="Redirect()"'
            }
            btn += '></button>'
            document.getElementById('container').innerHTML += btn;
        }
    }
}
function Redirect(){
    location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}
window.addEventListener('resize', function(event){
    Update();
}, true);