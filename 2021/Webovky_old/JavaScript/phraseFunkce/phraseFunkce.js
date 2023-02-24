/*function phraseFunkce(phrase){
    if(phrase == "jahoda"){
        console.log("red")
    }else if(phrase == "jablko"){
        console.log("green")
    }else if(phrase == "borůvka"){
        console.log("blue")
    }else{
        console.log("Špatná volba")
    }
    
    switch(phrase){
        case "jahoda":
            console.log("red")
        case "jablko":
            console.log("green")
        case "borůvka":
            console.log("blue")
        default:
            console.log("Neplatný input")
    }
}
function click(){
    let x;
    document.querySelector(".input").innerHTML = x;
    phraseFunkce(x);
}
function idk(){
    let password = document.getElementById("heslo").value;
    if(password.length > 6){
        if(password.indexOf(' ') !== -1){
            console.log("Špatné heslo")
        }else{
            console.log("Heslo je správně!")
        }
    }else{
        console.log("Špatné heslo")
    }
}
let num = 102;
if(num<=100){
    if(num>=50){
        console.log("hey!")
    }
}else{
    if(num < 103){
        if(num%2===0){
            console.log("You got me!")
        }
    }
}*/

function idk(){
    let password = document.getElementById("heslo").value;
    if(password.length > 6 && password.indexOf(' ') !== -1){
            console.log("Heslo je správně!")
    }else{
        console.log("Špatné heslo")
    }
}

let dnyVtydnu = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"]
function den(dnyVtydnu){
   //a)
   let randomDen = Math.floor(Math.random() * 8);
   console.log(dnyVtydnu[randomDen]);
   //b)
   console.log(dnyVtydnu[randomDen]);
   //c)
   for(let i = 0; i < dnyVtydnu.length; i++){
       console.log(dnyVtydnu[i])
   }
   //d)
   for(let i = dnyVtydnu.length; i < 0; i--){
    console.log(dnyVtydnu[i])
    }
}