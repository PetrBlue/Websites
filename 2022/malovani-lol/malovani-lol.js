let x = 0;
let y = 0;
for (let i = 1; i <= 10000; i++) {
    let a = document.createElement('div');
    a.classList.add("ctverec")
    document.body.appendChild(a);
    a.style.width = "1vw";
    a.style.height = "1vh";
    a.style.left = x + "vw";
    a.style.top = y + "vh";
    x++;
    if(i % 100 == 0){
        x = 0;
        y++;
    }
    a.addEventListener("mouseover" , () =>{
        a.style.opacity = "0%"
    })
}