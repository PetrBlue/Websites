let x;
let y;
let z;
function prvniCislo(val){
    x = val;
    console.log("První číslo: " + x);
    document.querySelector(".prvniDropdown2").innerHTML = x
}
function znamenko(val){
    y = val;
    console.log("znaménko: " + y);
    document.querySelector(".druhyDropdown2").innerHTML = y
}
function druheCislo(val){
    z = val;
    console.log("druhé číslo: " + z);
    document.querySelector(".tretiDropdown2").innerHTML = z
}
function vypocet(){
let v;
switch (y){
    case '+':
    v = x + z;
    break
    case '-':
    v = x - z;
    break
    case '*':
    v = x * z;
    break
    case '/':
    v = x / z;
    break
    default:
        console.log("Špatně zadané informace")
}
console.log("výsledek: " + v)
document.querySelector(".vysledek").innerHTML = v
}