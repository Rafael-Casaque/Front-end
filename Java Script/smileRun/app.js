var smile = document.getElementById("smile");
var corpo = document.getElementById("corpo");
var direcaoX=0;
var direcaoY=0;
var posicaoX=0;
var posicaoY=0;
var sorriso = 0;
const velocidade = 10;
var cores=["red","green","blue","yellow","black","gray","pink","orange","purple","violet","turquoise","cyan"];

document.addEventListener("keydown",movimentoDown);
document.addEventListener("keyup",movimentoUp);
setInterval(movimento,10);

function gerador(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

corpo.style.background = cores[gerador(0,11)];

function movimentoDown(){
    tecla = window.event.key;
    switch(tecla){
        case "ArrowRight":            
            direcaoX = 1;            
            break;
        case "ArrowLeft":
            direcaoX = -1;            
            break; 
        case "ArrowDown":
            direcaoY = 1;            
            break;
        case "ArrowUp":
            direcaoY = -1;            
            break;
        case "Enter":
            corpo.style.background = cores[gerador(0,11)];
            break;    
        case " ":  
            if(sorriso==0){          
                smile.style.backgroundImage = "url(imagens/sorrindo.png)"            
                sorriso = 1;
            }
            else if(sorriso==1){          
                smile.style.backgroundImage = "url(imagens/normal.png)"            
                sorriso = 0;
            }
            break;                    
    }
}

function movimentoUp(){
    tecla = window.event.key;
    switch(tecla){
        case "ArrowRight":
            direcaoX = 0;            
            break;
        case "ArrowLeft":
            direcaoX = 0;            
            break; 
        case "ArrowDown":
            direcaoY = 0;            
            break;
        case "ArrowUp":
            direcaoY = 0;            
            break;                 
    }
}

function movimento(){        
    posicaoX=posicaoX+(direcaoX*velocidade);
    posicaoY=posicaoY+(direcaoY*velocidade);    
    smile.style.left = `${posicaoX}px`;
    smile.style.top = `${posicaoY}px`;        
}