var corFonte = document.getElementById("corF");
var tamanhoFonte = document.getElementById("tamanhoF");
var nome = document.getElementById("nomeU");
var btn = document.getElementById("btn");
var titulo = document.getElementById("title");
var valorRange = document.getElementById("valorRange");

function salvarPreferencias(){
    if(document.querySelector('input[name="corPagina"]:checked')==null && localStorage.corPagina==undefined){
        alert("Há campos em branco!")
    }
    else{
        localStorage.corFonte = corFonte.value;

        try{
            localStorage.corPagina = document.querySelector('input[name="corPagina"]:checked').value;    
        }
        catch(e){
            localStorage.corPagina = localStorage.corPagina;
        }        
        localStorage.tamanhoFonte = tamanhoFonte.value;
        nome.value==false?localStorage.nome=localStorage.nome:localStorage.nome = nome.value;                 
    }
    
    if(localStorage.nome==""){
        alert("Há campos em branco!")
    }
    else{
        document.body.style.backgroundColor = localStorage.corPagina;   
        document.body.style.color = localStorage.corFonte;   
        document.body.style.fontSize = localStorage.tamanhoFonte+"px";   
        titulo.innerHTML = `Bem vindo, ${localStorage.nome}`;
    }
}

function carregarPreferencias(){
    if(localStorage.nome==undefined){
        console.log("não há dados no localStorage");
    }
    else{
        document.body.style.backgroundColor = localStorage.corPagina;   
        document.body.style.color = localStorage.corFonte;   
        document.body.style.fontSize = localStorage.tamanhoFonte+"px";   
        titulo.innerHTML = `Bem vindo, ${localStorage.nome}`;
    }    
}

function carregarRange(){
    valorRange.innerHTML = tamanhoFonte.value+"px";    
}

function teclar(){
var tecla = window.event.key;
    if(tecla=="Enter"){
        salvarPreferencias();                
    }
    else{

    }
}

btn.addEventListener("click",salvarPreferencias);
window.addEventListener("load",carregarPreferencias);
tamanhoFonte.addEventListener("input",carregarRange);
window.addEventListener("keydown",teclar);