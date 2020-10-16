"use strict"
/*
function valtoztat(){
    let hatter = document.getElementById("hatter").value;

    if (hatter == "kek" || hatter == "kék") {
        hatter = "blue";
    }else if (hatter == "zöld" || hatter == "zold"){
        hatter = "green";
    }
    else if(hatter == "piros"){
            hatter = "red";
    }
    else{}
    document.body.style.backgroundColor = hatter;
}
*/
function valtoztat(){
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue= document.getElementById("blue").value;

    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}