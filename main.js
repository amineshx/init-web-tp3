var modules = ["Module"];
var coefs = ["Coefficient"];
var cridits = ["Credits"];
var EMDS = ["Note"];
var Results = ["Resultat"];

alert("cette page permet d'etablir le bullietin de note d'un etudiant")
var fullName = prompt("Donner le nom et prenome de l'etudiant:");
var ModulesNum = prompt("Donner le nombre de modules");
  while (true) {
   if (ModulesNum !== null && ModulesNum !== ""){
    ModulesNum = Number(ModulesNum);

    if(isNaN(ModulesNum)){
        alert("Invalid input. Please enter a number.");
        ModulesNum=null;
        var ModulesNum = prompt("Donner le nombre de modules");
    } else if (ModulesNum <= 0 ){
        alert("Invalid input. Please enter a number bigger then 0 :)");
        ModulesNum=null;
        var ModulesNum = prompt("Donner le nombre de modules");
    }else{
        break;
    }
   }else{
    alert("Invalid input. Please enter a number.");
    ModulesNum=null;
    var ModulesNum = prompt("Donner le nombre de modules");
   }
  }
for(let i = 1; i <= ModulesNum; i++){
  var module= prompt(`Donner le nom du module N ${i}:`);
  modules.push(module);
  var coef= prompt("Donner la coefficient :");
  while (true) {
    if (coef !== null && coef !== ""){
        coef = Number(coef);
        if(isNaN(coef)){
            alert("Invalid input. Please enter a number.");
            coef=null;
            var coef = prompt("Donner la coefficient");
        } else if (coef <= 0 ){
            alert("Invalid input. Please enter a number bigger then 0 :)");
            coef=null;
            var coef = prompt("Donner la coefficient");
        }else{
            coefs.push(coef);
            break;
        }
    } else{
        alert("Invalid input. Please enter a number.");
        coef=null;
        var coef = prompt("Donner la coefficient");
    }
  }   

  var cridit = prompt("Donner le cridit :");
  while (true) {
    if (cridit !== null && cridit !== ""){
        cridit = Number(cridit);
        if(isNaN(cridit)){
            alert("Invalid input. Please enter a number.");
            cridit=null;
            var cridit = prompt("Donner le cridit");
        } else if (cridit <= 0 ){
            alert("Invalid input. Please enter a number bigger then 0 :)");
            cridit=null;
            var cridit = prompt("Donner le cridit");
        }else{
            cridits.push(cridit);
            break;
        }
    } else{
        alert("Invalid input. Please enter a number.");
        cridit=null;
        var cridit= prompt("Donner le cridit :");
    }
  }    
  
  var EMD = prompt("Donner la note d'examin");
  while (true) {
    if (EMD !== null && EMD !== ""){
        EMD = Number(EMD);
        if(isNaN(EMD)){
            alert("Invalid input. Please enter a number.");
            EMD=null;
            var EMD = prompt("Donner la note d'examin");
        } else if (EMD < 0 || EMD > 20 ){
            alert("Invalid input. Please enter a number between 0 and 20 :)");
            EMD=null;
            var cridit = prompt("Donner la note d'examin");
        }else{
            EMDS.push(EMD);
            break;
        }
    }else{
      alert("Invalid input. Please enter a number.");
      EMD=null;
      var EMD= prompt("Donner la note d'examin:");
  }
  }    
} 

var theBigTab = [modules,coefs,cridits,EMDS,Results];

var transpose = [];
for (var i = 0; i < theBigTab.length; i++) {
  for (var j = 0; j < theBigTab[i].length; j++) {
    if (i === 0) {
      transpose[j] = [];
    }
    transpose[j][i] = theBigTab[i][j];
  }
}

for ( i=1 ; i <transpose.length; i++ ){
  var sum = 0 ;
  sum = sum + (transpose[i][1] * transpose[i][3]);
  transpose[i][4]=sum;
}
// background color

document.body.style.backgroundColor = "#FFA07A";

// afiichage d'image


const img = document.createElement('img');
img.src = './ramadan.jpg';
const container = document.getElementById('image-container');
container.appendChild(img);

// affichage de nome d'etudiant

document.write("<strong>nom et prenom de l'etudiant :"+fullName+"</strong><br>");

var table = document.createElement("table");
var body = document.getElementsByTagName("body")[0];
body.appendChild(table);

for(var i = 0; i < transpose.length; i++) {
    var row = document.createElement("tr");
    for(var j = 0; j < transpose[i].length; j++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(transpose[i][j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    table.appendChild(row);
}

// moy 

let sumofcoef = 0;
let moy = 0;
let sumofcridit = 0;
for (i= 1 ; i<transpose.length; i++){
    moy = moy + transpose[i][4];
    sumofcoef = sumofcoef + transpose[i][1];
    sumofcridit = sumofcridit + transpose[i][2];
}
moy = moy / sumofcoef;

document.write("<strong>total coeficient:"+sumofcoef+"</strong><br>");
document.write("<strong>total cridit:"+sumofcridit+"</strong><br>");
document.write("<strong>la moyenne est: "+moy+"</strong><br>");

if (moy >= 10 ){
  document.write("<strong>Resultat: Admis</strong><br>");
}else{
  document.write("<strong>Resultat: ajournee</strong><br>");
}