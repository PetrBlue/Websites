const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+=";
let password = "";

function generate(){
    password = "";
    document.querySelector(".password").value = "";
    console.log(document.querySelector(".password").value)
    let length = document.querySelector(".quantity").value;
    if(length > 20){
        length = 20;
        document.querySelector(".quantity").value = 20;
    }
    let upperCaseChecked = document.querySelector("#upperCase").checked;
    let lowerCaseChecked = document.querySelector("#lowerCase").checked;
    let numbersChecked = document.querySelector("#numbers").checked;
    let specialCharactersChecked = document.querySelector("#specialCharacters").checked;
    console.log("hi")
    for(let i = 0; i < length; i++){
    if(upperCaseChecked == false && lowerCaseChecked == false && numbersChecked == false && specialCharactersChecked == false){
        i = length;
        alert("Please check at least one checkbox");
        break;
    }
        console.log("fu")
        const xd = Math.floor(Math.random()*4+1);
        switch(xd){
            case 1:
                if(upperCaseChecked == true){
                    const temp2 = Math.floor(Math.random()*25+1);
                    password += upperCaseAlphabet[temp2];
                    console.log("Uppercase added");
                }else{
                    i--;
                }
                break;
            case 2:
                if(lowerCaseChecked == true){
                    const temp2 = Math.floor(Math.random()*25+1);
                    password += lowerCaseAlphabet[temp2];
                    console.log("Lowercase added");
                }else{
                    i--;
                }
                break;
            case 3:
                if(numbersChecked == true){
                    const temp2 = Math.floor(Math.random()*9+1);
                    password += numbers[temp2];
                    console.log("Number added");
                }else{
                    i--;
                }
                break;
            case 4:
                if(specialCharactersChecked == true){
                    const temp2 = Math.floor(Math.random()*12+1);
                    password += specialCharacters[temp2];
                    console.log("Special character added");
                }else{
                    i--;
                }
                break;
            default:
                alert("idk u r idiot")
                i = length;
                break;
        }
    }
    console.log(password)
    document.querySelector(".password").value = password;
}