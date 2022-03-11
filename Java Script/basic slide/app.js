var fotos = [];
var barra = document.getElementById('barra');
var botaoAnterior = document.getElementById('anterior');
var botaoProximo = document.getElementById('proximo');
var slide = document.getElementById('slide');
var i=0;
var j=0;
var k=0;
var intervalo;

function carregamento(){
    for(i=0;i<4;i++){
        fotos[i] = new Image();
        fotos[i].src = `imagens/${i+1}.jpg`
    }
    slide.style.backgroundImage = `url(${fotos[0].src})`;
}

function animacaoBarra(){
    //720px/5 segundos = 144px/s ==> 1.44px a cada 10ms    
    barra.style.width = `${i}px`;
    i+=1.44;
    if(i>=720){
        i=0;
    }    
}                                    

function trocarFoto(){
    k+=1.44;    
    if(k>=720){
        if(j>=fotos.length-1){
            j=0;
        }
        else{
            j++;
        }
        slide.style.backgroundImage = `url(${fotos[j].src})`;        
        k=0;
    }
}

function clickAnterior(){
    i=0;
    if(j<=0){
        j=3;
    }
    else{
        j--;
    }
    slide.style.backgroundImage = `url(${fotos[j].src})`;
    clearInterval(intervalo);
    clearInterval(intervalo);
    clearInterval(intervalo);
    k=0;
    intervalo = setInterval(trocarFoto,10);    
}

function clickProximo(){
    i=0;
    if(j>=fotos.length-1){
        j=0;
    }
    else{
        j++;
    }
    slide.style.backgroundImage = `url(${fotos[j].src})`;
    clearInterval(intervalo);
    k=0;
    intervalo = setInterval(trocarFoto,10);
}

window.addEventListener("load",carregamento);
setInterval(animacaoBarra,10);
intervalo = setInterval(trocarFoto,10);
botaoAnterior.addEventListener("click",clickAnterior);
botaoProximo.addEventListener("click",clickProximo);