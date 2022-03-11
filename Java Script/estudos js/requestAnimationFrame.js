//html

document.write(`<div id="principal"></div>`)
document.write(`<div id="secundaria"></div>`)

//css

document.getElementById("principal").style.height = "50px";
document.getElementById("secundaria").style.height = "50px";
document.getElementById("principal").style.margin = "0px";
document.getElementById("secundaria").style.margin = "0px";
document.getElementById("principal").style.width = "50px";
document.getElementById("secundaria").style.width = "50px";
document.getElementById("principal").style.display = "block";
document.getElementById("secundaria").style.display = "block";
document.getElementById("principal").style.position = "absolute";
document.getElementById("secundaria").style.position = "absolute";

//js

//var posicao=0;
var anima;
var i=0;
var divPrimaria = document.getElementById("principal")    
var divSecundaria = document.getElementById("secundaria")    

function setup(){
    animacao(divPrimaria,0,1,5);    
    setTimeout(function(){ 
        animacao(divSecundaria,0,1,5);
    }, 4400);

    setInterval(function(){
        divSecundaria.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    },4400);
    setInterval(function(){
        divPrimaria.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    },4400);
}

function animacao(obj,posicao,direcao,velocidade){
    posicao += (velocidade*direcao);
    obj.style.left = `${posicao}px`;        
    
    anima = requestAnimationFrame(function(){
        animacao(obj,posicao,direcao,velocidade)
    });
    if (posicao>1366-53){
        direcao = -1;
    } 
    else if (posicao<0){
        direcao = 1;
    }
    document.addEventListener("keydown",function(){
        if(window.event.key==" "){
            velocidade++;
        }
        else if(window.event.key=="Enter"){
            velocidade=5;
        }        
        else if(window.event.key=="Control"){
            girar();
        }        
    })
}

function girar(){    
    divPrimaria.style.transform = `rotate(${i}deg)`;
    divSecundaria.style.transform = `rotate(${i}deg)`;
    if(i==360){
        i=0;
    }
    i++;
    requestAnimationFrame(girar);
}

window.addEventListener("load",setup); //evento para carregar a função assim que a página é carregada