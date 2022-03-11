/*

<div id="div-principal"></div>

#div-principal{
            height: 300px;
        }
        .classe1{
            background-color: red;
        }
        .classe2{
            background-color: green;
        }
        .classe3{
            background-color: blue;
        }

*/

var div = document.getElementById("div-principal");
var i=1;

div.setAttribute("class","classe1"); //adiciona o atributo class com o valor classe1

div.removeAttribute("class"); //remove o atributo class

console.log(div.hasAttribute("class")) //checa se há o atributo class

function trocarCor(){
    div.removeAttribute("class");
    div.setAttribute("class",`classe${i}`);    
    i > 2 ? i = 0 : i++;    
}

setInterval(trocarCor,1000);