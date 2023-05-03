var person = ["Scrooge McDuck","Tony Stark","Henry Billiards","Elon Must"];
var salaries = [500000000,7.25,9.00,.10];


function addSalary(){
   let personUno = document.getElementById("EMPNAME");
   let salaryUno = document.getElementById("EMPSALARY");
   if(personUno.value == "" || salaryUno.value == ""){
    alert("Please enter a name and a salary")
   } else{
   person.push(personUno.value);
   salaries.push(salaryUno.value);
   document.getElementById("person").innerHTML = person;
   document.getElementById("salary").innerHTML = salaries;
   }
}

function displayResults(){
    var k = 0;
    let count = 0;
    var l = 0;
    for (let i = 0; i < salaries.length; i++) {
        k += salaries[i]; 
        if(l < salaries[i]){
            l = salaries[i];
        }
        count++;
    }
    k = k / count;
    k = k.toFixed(2);
    document.getElementById("results").innerHTML = "$"+l;
    document.getElementById("results1").innerHTML = "$"+k;
}


function displaySalary(){
    
    var table = document.createElement("table"),
    row = table.insertRow(),
    perrow = 1;

    for(var i = 0; i < person.length; i++){
        var cell = row.insertCell();
        var cell1 = row.insertCell();

        cell1.innerHTML = salaries[i];
        cell.innerHTML = person[i];
      
         var next = i + 1;
         if(next%perrow == 0 && next!=person.length){
            row = table.insertRow();
         }
    }
    document.getElementById("container").appendChild(table);
}

