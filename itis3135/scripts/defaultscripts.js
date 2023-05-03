    function scriptTest() {
    alert("Hey my script is running");
}
function theFunction(){
    var x = document.getElementById("name").ariaValueMax;
    document.getElementById("")
}

function fname() {
    let name = document.getElementById("name").value;
    let feel = document.getElementById("feel").value
    let print = "The Aggresive Dodo welcomes you, " + name + "! We are glad you are doing " + feel;
    document.getElementById("printhere").innerHTML = print;
}

function insultgen() {
    let print = "You are a featherless mammal, hehe loser.";
    document.getElementById("insultprinter").innerHTML = print;

}

function birdquestion(){
    let answer = document.getElementById("bquestion").value;
    let print = "You are correct I am the best type of bird :)";
    let print1 = "Noooo!! you are very very wrong the Dodo is the best bird"
    if(answer == "Dodo" || answer == "DODO" || answer == "dodo"){
        document.getElementById("questionprinter").innerHTML = print;
    } else {
        document.getElementById("questionprinter").innerHTML=print1;
    }
}

function chickennugget(){
    let answer = document.getElementById("nquestion").value;
    let print = "You monster, you are eating my kind";
    let print1 = "Thats right, you shouldn't eat brids."
    if(answer== "none" || answer == "None" || answer == "I don't like nuggets" || answer == "I dont like nuggets"){
        document.getElementById("nuggetPrinter").innerHTML = print1;
    } else {
        document.getElementById("nuggetPrinter").innerHTML=print;
    }
}


function dodoFacts(){
    let print = "Dodo eggs weighed up to 3.5lbs";
    document.getElementById("factPrinter").innerHTML = print;
}

   