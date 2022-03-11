//Eventos podem ser criados sendo chamado no html

/*
<div onmouseover="mudarCor(this,'black')" onmouseout="mudarCor(this,'white')" id="div-principal"></div>
<button onclick="escrever()" id="botao">Clique</button>
*/

function escrever(){
    document.write(`<p>Botão clicado</p>`);
}

//Lista de eventos 
//https://www.ic.unicamp.br/~celio/inf533/docs/eventos_javascript.html

//Ou os elementos podem ser feitos totalmente no js

//document.getElementById("div-secundaria").addEventListener("click",alert());

document.getElementById("div-secundaria").addEventListener("click",mudarCor2);

//IMPORTANTE
//As funções dentro do addEvetListener não podem ter (), senão são executadas imediatamente
//Só pode passar parâmetros se for uma função anônima, exemplo na linha 46

var estado = 0

function mudarCor2(){        
    if(estado==0){
        document.getElementById("div-secundaria").style.background = "black";
        estado = 1;
    }
    else if(estado==1){
        document.getElementById("div-secundaria").style.background = "white";
        estado = 0;
    }
}

function alertar(){
    alert();
}

//window.addEventListener('load',mudarCor); carrega o evento junto com a página

document.getElementById("div-secundaria").addEventListener("click",mudarCor2);

document.getElementById("div-secundaria").addEventListener("mouseover",function(event){
    mudarCor(document.getElementById("div-secundaria"),"black");
});

document.getElementById("div-secundaria").addEventListener("mouseout",function(event){
    mudarCor(document.getElementById("div-secundaria"),"white");
});

function mudarCor(objeto,cor){
    objeto.style.background = cor;
    estado = 1;
}