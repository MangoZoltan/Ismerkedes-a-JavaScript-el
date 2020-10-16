"use strict"
var x = "";
function szamit(){
    var mezo = document.getElementById("mezo").value;
    
    var a = +mezo.split(" ")[0];
    var b = +mezo.split(" ")[2];
    var x = mezo.split(" ")[1];
    var d = 0;
    if (x == "+") {
        d = a + b;
    } else if (x == "-") {
        d = a - b;
    } 
    else if (x == "*") {
        d = a * b;
    } 
    else if (x == "/") {
        d = a / b;
    }
    
    document.getElementById("mezo").value = d;
}
var selected = document.getElementById("mezo");

function ir(x){
    selected.value += x;
}
function clearM(){
    selected.value = "";
}