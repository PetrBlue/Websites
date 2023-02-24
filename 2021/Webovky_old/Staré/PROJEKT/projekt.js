
var i = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var o = 0;
var p = 0;
var q = 0;
var odkaz = "";
function b1(id){
    switch(id){
        case "h1":
            if (j == 0)
            {
            document.querySelector(".f1").style="transform: rotatey(180deg); position: absolute;left: -5%; height: 90vh; width: 85vw;";
            document.querySelector(".h1").style="z-index: 3;";
            document.querySelector(".grid-content-back").style="color: white";
            j = 1
            }
            else if (j == 1)
            {
            document.querySelector(".f1").style="transform: rotatey(0);";
            document.querySelector(".h1").style="position: relative;z-index:2";
            document.querySelector(".grid-content-back").style="color: transparent";
            j = 0
            }
        break
        case "h2":
            if (k == 0)
            {
            document.querySelector(".f2").style="transform: rotatey(180deg); position: absolute; height: 90vh; width: 85VW; left: -5%;";
            document.querySelector(".h2").style="z-index: 3;";
            document.querySelector(".grid-content-back2").style="color: white";
            k = 1
            }
            else if (k == 1)
            {
            document.querySelector(".f2").style="transform: rotatey(0);";
            document.querySelector(".h2").style="position: relative;z-index:2";
            document.querySelector(".grid-content-back2").style="color: transparent";
            k = 0
            }
        break
        case "h3":
            if (l == 0)
            {
            document.querySelector(".f3").style="transform: rotatey(180deg); position: absolute; height: 90vh; width: 85VW;";
            document.querySelector(".h3").style="z-index: 3;";
            document.querySelector(".grid-content-back3").style="color: white";
            l = 1
            }
            else if (l == 1)
            {
            document.querySelector(".f3").style="transform: rotatey(0);";
            document.querySelector(".h3").style="position: relative;z-index:2";
            document.querySelector(".grid-content-back4").style="color: transparent";
            l = 0
            }
        break
        case "h4":
            if (m == 0)
            {
            document.querySelector(".f4").style="transform: rotatey(180deg); position: absolute; height: 90vh; width: 85VW; left: -5%; top: -115%";
            document.querySelector(".h4").style="z-index: 3;";
            document.querySelector(".grid-content-back4").style="color: white";
            m = 1
            }
            else if (m == 1)
            {
            document.querySelector(".f4").style="transform: rotatey(0);";
            document.querySelector(".h4").style="position: relative;z-index:2";
            document.querySelector(".grid-content-back4").style="color: transparent";
            m = 0
            }
        break
        case "h5":
            if (n == 0)
            {
            document.querySelector(".f5").style="transform: rotatey(180deg); position: absolute; height: 90vh; width: 85VW; left: -5%; top: -115%;";
            document.querySelector(".h5").style="z-index: 3;";
            document.querySelector(".grid-content-back5").style="color: white";
            n = 1
            }
            else if (n == 1)
            {
            document.querySelector(".f5").style="transform: rotatey(0);";
            document.querySelector(".h5").style="position: relative;z-index:2";
            document.querySelector(".grid-content-back5").style="color: transparent";
            n = 0
            }
        break
        case "h6":
            if (o == 0)
            {
            document.querySelector(".f6").style="transform: rotatey(180deg); position: absolute; height: 90vh; width: 85VW; left: -5%; top: -115%;";
            document.querySelector(".h6").style="z-index: 3;";
            document.querySelector(".grid-content-back6").style="color: white";
            o = 1
            }
            else if (o == 1)
            {
            document.querySelector(".f6").style="transform: rotatey(0);";
            document.querySelector(".h6").style="position: relative;z-index:2";
            document.querySelector(".grid-content-back6").style="color: transparent";
            o = 0
            }
        break
        case "h1r":
        if (p == 0)
            {
            document.querySelector("#f1r").style="transform: rotatey(180deg); position: absolute;left: -10vw; height: 85vh; width: 90vw; top: -40%";
            document.querySelector("#h1r").style="z-index: 3;";
            document.querySelector("#grid-content-backr").style="color: white";
            p = 1
            }
            else if (p == 1)
            {
            document.querySelector("#f1r").style="transform: rotatey(0);";
            document.querySelector("#h1r").style="position: relative;z-index:2";
            document.querySelector("#grid-content-backr").style="color: transparent";
            p = 0
            }
        break
        case "h3r":
            if (q == 0)
            {
            document.querySelector("#f3r").style="transform: rotatey(180deg); position: absolute; height: 85vh; width: 90VW; top: -40%; left: 5vw";
            document.querySelector("#h3r").style="z-index: 3;";
            document.querySelector("#grid-content-back3r").style="color: white";
            q = 1
            }
            else if (q == 1)
            {
            document.querySelector("#f3r").style="transform: rotatey(0);";
            document.querySelector("#h3r").style="position: relative;z-index:2";
            document.querySelector("#grid-content-back3r").style="color: transparent";
            q = 0
            }
        break
    }
}
function c1(id){
    switch(id)
    {
        case "c1":
            odkaz = "web-battlefield.html"
            break
        case "c2":
            odkaz = "web-rainbow.html"
            break
        case "c3":
            odkaz = "web-call.html"
            break
        case "c4":
            odkaz = "web-darkSouls.html"
            break
        case "c5":
            odkaz = "web-witcher.html"
            break
        case "c6":
            odkaz = "web-godOfWar.html"
            break
        case "c7":
            odkaz = "web-assassin.html"
            break
        case "c8":
            odkaz = "web-uncharted.html"
            break
        case "c9":
            odkaz = "web-mafia.html"
            break
    }
    window.open(odkaz,'_top')
}
function p1(id){
    switch (id)
    {
        case "div1":
if (i == 0)
{
document.querySelector(".f1").style="transform: rotatey(180deg); position: absolute; height: 115vh; width: 85vw; ";
document.querySelector(".h1").style="z-index: 3;";
document.querySelector(".grid-content-back").style="color: white";
document.querySelector(".grid-content").style="display: none";
i = 1
}
else if (i == 1)
{
document.querySelector(".f1").style="transform: rotatey(0);";
document.querySelector(".h1").style="position: relative;z-index:2";
document.querySelector(".grid-content-back").style="color: transparent";
document.querySelector(".grid-content").style="display: block";
i = 0
}
break
    case "div2":
    if (a == 0)
    {
    document.querySelector(".f2").style="transform: rotatey(180deg); position: absolute; height: 115vh; width: 85vw; z-index: 3; left: -10%";
    document.querySelector(".h2").style="z-index: 3;";
    document.querySelector(".grid-content-back2").style="color: white";
    document.querySelector(".grid-content2").style="display: none";
    a = 1
    }
    else if (a == 1)
    {
    document.querySelector(".f2").style="transform: rotatey(0);";
    document.querySelector(".h2").style="position: relative;z-index:2";
    document.querySelector(".grid-content-back2").style="color: transparent";
    document.querySelector(".grid-content2").style="display: block";
    a = 0
    }
break
case "div3":
    if (b == 0)
    {
    document.querySelector(".f3").style="transform: rotatey(180deg); position: fixed; height: 115vh; width: 85vw; z-index: 3; left: -20%";
    document.querySelector(".h3").style="z-index: 3;";
    document.querySelector(".grid-content-back3").style="color: white";
    document.querySelector(".grid-content3").style="display: none";
    b = 1
    }
    else if (b == 1)
    {
    document.querySelector(".f3").style="transform: rotatey(0);";
    document.querySelector(".h3").style="position: relative;z-index:2";
    document.querySelector(".grid-content-back3").style="color: transparent";
    document.querySelector(".grid-content3").style="display: block";
    b = 0
    }
break
case "div4":
    if (c == 0)
    {
    document.querySelector(".f4").style="transform: rotatey(180deg); position: fixed; height: 115vh; width: 85vw; z-index: 3; top: -112%;";
    document.querySelector(".h4").style="z-index: 3;";
    document.querySelector(".grid-content-back4").style="color: white";
    document.querySelector(".grid-content4").style="display: none";
    c = 1
    }
    else if (c == 1)
    {
    document.querySelector(".f4").style="transform: rotatey(0);";
    document.querySelector(".h4").style="position: relative;z-index:2";
    document.querySelector(".grid-content-back4").style="color: transparent";
    document.querySelector(".grid-content4").style="display: block";
    c = 0
    }
break
case "div5":
    if (d == 0)
    {
    document.querySelector(".f5").style="transform: rotatey(180deg); position: fixed; height: 115vh; width: 85vw; z-index: 3; top: -112%; left: -10%";
    document.querySelector(".h5").style="z-index: 3;";
    document.querySelector(".grid-content-back5").style="color: white";
    document.querySelector(".grid-content5").style="display: none";
    d = 1
    }
    else if (d == 1)
    {
    document.querySelector(".f5").style="transform: rotatey(0);";
    document.querySelector(".h5").style="position: relative;z-index:2";
    document.querySelector(".grid-content-back5").style="color: transparent";
    document.querySelector(".grid-content5").style="display: block";
    d = 0
    }
break
case "div6":
    if (e == 0)
    {
    document.querySelector(".f6").style="transform: rotatey(180deg); position: fixed; height: 115vh; width: 85vw; z-index: 3; top: -112%; left: -20%";
    document.querySelector(".h6").style="z-index: 3;";
    document.querySelector(".grid-content-back6").style="color: white";
    document.querySelector(".grid-content6").style="display: none";
    e = 1
    }
    else if (e == 1)
    {
    document.querySelector(".f6").style="transform: rotatey(0);";
    document.querySelector(".h6").style="position: relative;z-index:2";
    document.querySelector(".grid-content-back6").style="color: transparent";
    document.querySelector(".grid-content6").style="display: block";
    e = 0
    }
break
case "div7":
    if (f == 0)
    {
    document.querySelector(".f7").style="transform: rotatey(180deg); position: fixed; height: 115vh; width: 85vw; z-index: 3;top: -224%;";
    document.querySelector(".h7").style="z-index: 3;";
    document.querySelector(".grid-content-back7").style="color: white";
    document.querySelector(".grid-content7").style="display: none";
    f = 1
    }
    else if (f == 1)
    {
    document.querySelector(".f7").style="transform: rotatey(0);";
    document.querySelector(".h7").style="position: relative;z-index:2";
    document.querySelector(".grid-content-back7").style="color: transparent";
    document.querySelector(".grid-content7").style="display: block";
    f = 0
    }
break
case "div8":
    if (g == 0)
    {
    document.querySelector(".f8").style="transform: rotatey(180deg); position: fixed; height: 115vh; width: 85vw; z-index: 3; top: -224%; left: -10%";
    document.querySelector(".h8").style="z-index: 3;";
    document.querySelector(".grid-content-back8").style="color: white";
    document.querySelector(".grid-content8").style="display: none";
    g = 1
    }
    else if (g == 1)
    {
    document.querySelector(".f8").style="transform: rotatey(0);";
    document.querySelector(".h8").style="position: relative;z-index:2";
    document.querySelector(".grid-content-back8").style="color: transparent";
    document.querySelector(".grid-content8").style="display: block";
    g = 0
    }
break
case "div9":
    if (h == 0)
    {
    document.querySelector(".f9").style="transform: rotatey(180deg); position: fixed; height: 115vh; width: 85vw; z-index: 3; top: -224%; left: -20%";
    document.querySelector(".h9").style="z-index: 3;";
    document.querySelector(".grid-content-back9").style="color: white";
    document.querySelector(".grid-content9").style="display: none";
    h = 1
    }
    else if (h == 1)
    {
    document.querySelector(".f9").style="transform: rotatey(0);";
    document.querySelector(".h9").style="position: relative;z-index:2";
    document.querySelector(".grid-content-back9").style="color: transparent";
    document.querySelector(".grid-content9").style="display: block";
    h = 0
    }
break
}
}
function b3(id){
    switch (id)
    {
        case "h1":
            if (i == 0)
            {
            document.querySelector(".f1").style="transform: rotatey(180deg); position: absolute; height: 90vh; width: 85vw; top: -50%;";
            document.querySelector(".h1").style="z-index: 3;";
            document.querySelector(".grid-content-back").style="color: white";
            document.querySelector(".grid-content").style="display: none";
            i = 1
            }
            else if (i == 1)
            {
            document.querySelector(".f1").style="transform: rotatey(0);";
            document.querySelector(".h1").style="position: relative;z-index:2";
            document.querySelector(".grid-content-back").style="color: transparent";
            document.querySelector(".grid-content").style="display: block";
            i = 0
            }
            break
                case "h2":
                if (a == 0)
                {
                document.querySelector(".f2").style="transform: rotatey(180deg); position: absolute; height: 90vh; width: 85vw; z-index: 3; top: -50%";
                document.querySelector(".h2").style="z-index: 3;";
                document.querySelector(".grid-content-back2").style="color: white";
                document.querySelector(".grid-content2").style="display: none";
                a = 1
                }
                else if (a == 1)
                {
                document.querySelector(".f2").style="transform: rotatey(0);";
                document.querySelector(".h2").style="position: relative;z-index:2";
                document.querySelector(".grid-content-back2").style="color: transparent";
                document.querySelector(".grid-content2").style="display: block";
                a = 0
                }
            break
            case "h3":
                if (b == 0)
                {
                document.querySelector(".f3").style="transform: rotatey(180deg); position: fixed; height: 90vh; width: 90vw; z-index: 3; top: -50%";
                document.querySelector(".h3").style="z-index: 3;";
                document.querySelector(".grid-content-back3").style="color: white";
                document.querySelector(".grid-content3").style="display: none";
                b = 1
                }
                else if (b == 1)
                {
                document.querySelector(".f3").style="transform: rotatey(0);";
                document.querySelector(".h3").style="position: relative;z-index:2";
                document.querySelector(".grid-content-back3").style="color: transparent";
                document.querySelector(".grid-content3").style="display: block";
                b = 0
                }
            break
            }
}
function b2(id){
    switch (id)
    {
        case "h1":
            if (i == 0)
            {
            document.querySelector(".f1").style="transform: rotatey(180deg); position: absolute; height: 90vh; width: 85vw; top: 0%; left: -40%";
            document.querySelector(".h1").style="z-index: 3;";
            document.querySelector(".grid-content-back").style="color: white";
            document.querySelector(".grid-content").style="display: none";
            i = 1
            }
            else if (i == 1)
            {
            document.querySelector(".f1").style="transform: rotatey(0);";
            document.querySelector(".h1").style="position: relative;z-index:2";
            document.querySelector(".grid-content-back").style="color: transparent";
            document.querySelector(".grid-content").style="display: block";
            i = 0
            }
            break
                case "h3":
                if (a == 0)
                {
                document.querySelector(".f3").style="transform: rotatey(180deg); position: absolute; height: 90vh; width: 85vw; z-index: 3; top: -50%";
                document.querySelector(".h3").style="z-index: 3;";
                document.querySelector(".grid-content-back3").style="color: white";
                document.querySelector(".grid-content3").style="display: none";
                a = 1
                }
                else if (a == 1)
                {
                document.querySelector(".f3").style="transform: rotatey(0);";
                document.querySelector(".h3").style="position: relative;z-index:2";
                document.querySelector(".grid-content-back3").style="color: transparent";
                document.querySelector(".grid-content3").style="display: block";
                a = 0
                }
            break
            case "h4":
                if (b == 0)
                {
                document.querySelector(".f4").style="transform: rotatey(180deg); position: fixed; height: 90vh; width: 90vw; z-index: 3; top: -50%";
                document.querySelector(".h4").style="z-index: 3;";
                document.querySelector(".grid-content-back4").style="color: white";
                document.querySelector(".grid-content4").style="display: none";
                b = 1
                }
                else if (b == 1)
                {
                document.querySelector(".f4").style="transform: rotatey(0);";
                document.querySelector(".h4").style="position: relative;z-index:2";
                document.querySelector(".grid-content-back4").style="color: transparent";
                document.querySelector(".grid-content4").style="display: block";
                b = 0
                }
            break
            case "h6":
                if (c == 0)
                {
                document.querySelector(".f6").style="transform: rotatey(180deg); position: fixed; height: 90vh; width: 90vw; z-index: 3; top: -50%";
                document.querySelector(".h6").style="z-index: 3;";
                document.querySelector(".grid-content-back6").style="color: white";
                document.querySelector(".grid-content6").style="display: none";
                c = 1
                }
                else if (c == 1)
                {
                document.querySelector(".f6").style="transform: rotatey(0);";
                document.querySelector(".h6").style="position: relative;z-index:2";
                document.querySelector(".grid-content-back6").style="color: transparent";
                document.querySelector(".grid-content6").style="display: block";
                c = 0
                }
            break
            }
}