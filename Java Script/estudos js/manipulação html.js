//getElementById


document.write(`<div id="manipulado">
<h1 id="manipulado2">Hello World!</h1>
</div>`);

document.write(`<h2 class="classe1">Teste</h2>`);
document.write(`<h3 class="classe1">Teste</h3>`);

//IMPORTANTE!

//As manipulações devem aparecer depois das tags, mesmo se for no html é neecessário abrir uma nova tag <script> e inserir o código

document.getElementById("manipulado").style.backgroundColor = "red";
document.getElementById("manipulado").style.textAlign = "center";

//ou

var manipulado = document.getElementById("manipulado");
var manipulado2 = document.getElementById("manipulado2").innerHTML;

manipulado.style.marginTop = "40px";
manipulado.style.color = "white";
manipulado.style.fontSize = "20px";
//manipulado.style.display = "none";

manipulado2.innerHTML = "Olá Mundo";



//getElementsByTagName

for(i=1;i<=10;i++){
    document.write(`<p>${i}</p>`);
}

var p = document.getElementsByTagName("p"); //é obtido um array com todos os <p>
var todas = document.getElementsByTagName("*"); //captura todas as tags da página
var terceirop = document.getElementsByTagName("p")[2];

p[0].innerHTML = "UM";
terceirop.innerHTML = "TRÊS";

try{
    for(i in p){
        p[i].style.color="blue";    
    }
}
catch(e){}



//querySelectorAll  obtem qualquer elemento

var seletor = document.querySelectorAll(".classe1");
var seletor2 = document.querySelectorAll("p");
var seletor3 = document.querySelectorAll("#manipulado2");
var seletor4 = document.querySelectorAll("body>div>h1");

try{
    for(i in seletor){
        seletor[i].style.color="red";    
    }
}
catch(e){}

try{
    for(i in seletor2){
        //seletor2[i].style.color="brown";    
    }
}
catch(e){}

try{
    for(i in seletor4){
        //seletor4[i].style.color="brown";    
    }
}
catch(e){}