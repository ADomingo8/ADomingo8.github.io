function getShape(){
    let answer = document.getElementById("polyQuestion").value;
    answer = Math.round(Math.abs(answer));
    if (answer == 1){
        document.getElementById("questionprinter").innerHTML="That is called a henagon";
    } else if (answer == 2){
        document.getElementById("questionprinter").innerHTML="That is called a Digon or a Bigon";
    } else if (answer == 3){
        document.getElementById("questionprinter").innerHTML="That is called a Trigon or a Triangle";
    } else if (answer == 4){
        document.getElementById("questionprinter").innerHTML="That is called a tetragon or a quadilateral";
    } else if (answer == 5){
        document.getElementById("questionprinter").innerHTML="That is called a pentagon";
    } else if (answer == 6){
        document.getElementById("questionprinter").innerHTML="That is called a hexagon";
    } else if (answer == 7){
        document.getElementById("questionprinter").innerHTML="That is called a heptagon or a septagon";
    } else if (answer == 8){
        document.getElementById("questionprinter").innerHTML="That is called an octagon";
    } else if (answer == 9){
        document.getElementById("questionprinter").innerHTML="That is called an enneagon or a nonagon";
    } else if (answer == 10){
        document.getElementById("questionprinter").innerHTML="That is called a Decagon";
    }
}   

function validEntry(){
    let input = document.getElementById("polyQuestion").value;
    input = Math.round(Math.abs(input));
    if(input > 10){
        alert("Please enter a valid number between 1-10");
    }
}

function entryAndGetShape(){
    getShape();
    validEntry();

}