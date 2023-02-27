// Just the css animation, too lazy to write it out
var msg = "";

for(let i = 0; i < 1001; i++){
    msg += Math.floor(i/10) + "." + i%10 + "%{position:absolute;top:" + (100 - i) + "%;}";
}

console.log(msg)