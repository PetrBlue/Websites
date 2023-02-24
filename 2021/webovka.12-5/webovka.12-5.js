function Clear(){
    console.log("lol")
    let temp2 = document.querySelector(".vysledek").children.length;
    console.log(temp2)
    for(let x = temp2; x > 0; x--){
        document.querySelector(".vysledek").firstElementChild.remove()
    }
}
function PridatCtverec(){
    let novyDiv =  document.createElement("div")
    novyDiv.classList.add("temp")
    const vel = document.querySelector(".input-velikost").value
    novyDiv.style.height = vel + "px";
    novyDiv.style.width = vel + "px";
    novyDiv.style.background = document.querySelector(".color").value;
    novyDiv.style.marginBottom = "5px";
    document.querySelector(".vysledek").appendChild(novyDiv)
}
function PridatKruh(){
    let novyDiv =  document.createElement("div")
    novyDiv.classList.add("temp")
    const vel = document.querySelector(".input-velikost").value
    novyDiv.style.height = (vel + "px");
    novyDiv.style.width = (vel + "px");
    novyDiv.style.background = document.querySelector(".color").value;
    novyDiv.style.marginBottom = "5px";
    novyDiv.style.borderRadius = "50%";
    document.querySelector(".vysledek").appendChild(novyDiv)
}