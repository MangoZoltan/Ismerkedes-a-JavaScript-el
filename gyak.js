'use strict';

/*
let szam = 125;
//HIBAKERESŐ
console.log(szam);
//DOM
document.getElementById("pelda").innerText = szam;
//BOM | Modális ablakot jelenít meg.
window.alert(szam);
*/


//CONFIRM | Igen, Nem | bool
/*
let beenged = window.confirm("Elmúltál már 18 éves?");

if(!beenged){
    document.getElementById("pelda").innerHTML = "Nem mehetsz be mert kicsi vagy.";
}else{
    document.getElementById("pelda").innerHTML = "Elég nagy vagy, bemehetsz.";
}
*/

/*
//PROMPT | String
let beenged = window.prompt("Elmúltál már 18 éves?", 18);
//let kor = Number(beenged);
//let kor = parseInt(beenged);
let kor = +beenged;

if(kor < 18){
    document.getElementById("pelda").innerHTML = "Nem mehetsz be, mert kicsi vagy.";
}else{
    document.getElementById("pelda").innerHTML = "Elég nagy vagy, bemehetsz.";
}*/

let bekeres = window.prompt("Hanyadik nap a mai a héten?", 8);
let nap = +bekeres;

if(nap == 1)
{
    document.getElementById("pelda").innerHTML="Hetfő vala";
}
else if(nap ==2)
{
    document.getElementById("pelda").innerHTML="Kedd vala";
}
else if(nap ==3)
{
    document.getElementById("pelda").innerHTML="Szerda vala";
}
else if(nap ==4)
{
    document.getElementById("pelda").innerHTML="Csütörtök vala";
}
else if(nap ==5)
{
    document.getElementById("pelda").innerHTML="Péntek vala";
}
else if(nap ==6)
{
    document.getElementById("pelda").innerHTML="Szombat vala";
}
else if(nap ==7)
{
    document.getElementById("pelda").innerHTML="Vasárnap vala";
}
else
{
    document.getElementById("pelda").innerHTML="Gyökér! Nincs is ilyen nap!";
}