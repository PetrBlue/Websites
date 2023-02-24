function CallFunction(){
    BackgroundColorChooser();
    HeaderColorChooser();
    Header3ColorChooser();
    ParagraphColorChooser();
    ButtonColorChooser();
}

function BackgroundColorChooser(){
    document.getElementById("container").style.backgroundColor = document.getElementById("background-color-chooser").value;
}
function HeaderColorChooser(){
    document.getElementById("header").style.color = document.getElementById("header-color-chooser").value;
}
function Header3ColorChooser(){
    document.getElementById("header3").style.color = document.getElementById("header3-color-chooser").value;
}
function ParagraphColorChooser(){
    var mClass = document.getElementsByClassName('paragraf');
    for(i = 0; i < mClass.length; i++) {
    mClass[i].style.color = document.getElementById("paragraph-color-chooser").value;
    mClass[i].style.fontSize = document.getElementById("paragraph-size-chooser").value + "px";
    }   
}
function ButtonColorChooser(){
  var btn = document.getElementById("button");
  btn.style.backgroundColor = document.getElementById("button-color-chooser").value;
  btn.style.width = document.getElementById("button-width-chooser").value + "px";
  btn.style.height = document.getElementById("button-height-chooser").value + "px";
  btn.style.borderRadius = document.getElementById("button-corners-chooser").value + "px";
  btn.textContent = document.getElementById("button-content-chooser").value;
}