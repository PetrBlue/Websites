let abeceda = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let ulozPismeno = null;
let pouzitaPismena = "Použitá písmena: ";
let reseni;
let slova;
let randomCislo;
let vybraneSlovo;
let pocetChyb = 0;
let pocetPismen;
let kontrolaPismena = null;
let wins = 0;
let temp1 = "";

zacatekHry();

function zacatekHry(){
    abeceda = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    reseni = [];
    slova = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    randomCislo = Math.floor(Math.random()*slova.length);
    vybraneSlovo = slova[randomCislo];
    Array.from(vybraneSlovo);
    console.log(vybraneSlovo);
    pocetPismen = vybraneSlovo.length;
    for(let i = 0; i < pocetPismen; i++){
        reseni.push("_");
        console.log(reseni);
    }
    temp1 = "";
    for(let i = 0; i < reseni.length; i++){
        temp1 += reseni[i];
    }
    document.querySelector(".reseni").innerHTML = "Slovo: " + temp1;
    pocetChyb = 0;
    document.querySelector(".pocet-chyb").innerHTML = "Počet chyb: " + pocetChyb;
    pouzitaPismena = "Použitá písmena: ";
    document.querySelector(".pouzita-pismena").innerHTML = pouzitaPismena;
}

function zadaniPismena(){
    let pismeno = document.querySelector("#input-value").value;
    document.querySelector("#input-value").value = "";
    var lol = pismeno.toString().toLowerCase();
    pismeno = lol;
    ulozPismeno = null;
    for(let i = 0; i < abeceda.length; i++){
        if(pismeno == abeceda[i])
        {
            console.log('Jsem tu xdddd')
            ulozPismeno = abeceda[i];
            abeceda[i] = null;
        }
        console.log('ahyaa')
        }
        if(ulozPismeno === null){
            alert('Špatně zadaný znak')
        }else{
            pouzitaPismena += pismeno + ", ";
            console.log('jedna')
            document.querySelector(".pouzita-pismena").innerHTML = pouzitaPismena;
            console.log('dva')
            kontrolaPismena = null;
            for(let i = 0; i < vybraneSlovo.length; i++){
                if(vybraneSlovo[i] == pismeno){
                    reseni[i] = pismeno;
                    temp1 = "";
                    for(let i = 0; i < reseni.length; i++){
                        temp1 += reseni[i];
                    }
                    document.querySelector(".reseni").innerHTML = "Slovo: " + temp1;
                    kontrolaPismena = -1;
                    let temp = kontrolaVyhry();
                    if(temp == true){
                        wins++;
                        document.querySelector(".vyhry").innerHTML = "Počet Výher: " + wins;
                        alert('✨Vyhrál jsi✨ Slovo bylo: ' + temp1);
                        zacatekHry();
                    }
                }
            }
            if(kontrolaPismena == null){
                pocetChyb++;
            }
            document.querySelector(".pocet-chyb").innerHTML = "Počet chyb: " + pocetChyb;
        }
}
function kontrolaVyhry(){
    let reseni2 = reseni;
    Array.from(reseni2);
    console.log(reseni2)
    for(let i = 0; i < vybraneSlovo.length; i++){
        if(reseni2[i] == "_"){
            return false;
        }
    }
    return true;
}

