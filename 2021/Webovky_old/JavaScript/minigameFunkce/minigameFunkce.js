let vitalita = document.querySelector(".stat-vitality-value").innerHTML;
let strength = document.querySelector(".stat-strength-value").innerHTML;
let dexterity = document.querySelector(".stat-dexterity-value").innerHTML;

function vitalitaPlus(){
    console.log("Před: " + vitalita)
    vitalita++;
    document.querySelector(".stat-vitality-value").innerHTML = vitalita;
    console.log("Po: " + vitalita)
}

function vitalitaMinus(){
    console.log("Před: " + vitalita)
    vitalita--;
    document.querySelector(".stat-vitality-value").innerHTML = vitalita;
    console.log("Po: " + vitalita)
}
function strengthPlus(){
    console.log("Před: " + strength)
    strength++;
    document.querySelector(".stat-strength-value").innerHTML = strength;
    console.log("Po: " + strength)
}

function strengthMinus(){
    console.log("Před: " + strength)
    strength--;
    document.querySelector(".stat-strength-value").innerHTML = strength;
    console.log("Po: " + strength)
}
function dexterityPlus(){
    console.log("Před: " + dexterity)
    dexterity++;
    document.querySelector(".stat-dexterity-value").innerHTML = dexterity;
    console.log("Po: " + dexterity)
}

function dexterityMinus(){
    console.log("Před: " + dexterity)
    dexterity--;
    document.querySelector(".stat-dexterity-value").innerHTML = dexterity;
    console.log("Po: " + dexterity)
}