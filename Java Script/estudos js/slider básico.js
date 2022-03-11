var slider = document.getElementById('div-slider');
var imagens = []

function preCarregamento(){

    for(i=0;i<4;i++){
        imagens[i] = new Image();
        imagens[i].src = `imagens/${i+1}.jpg`;        
    }
    slider.style.backgroundImage = `url(${imagens[0].src})`;
}

function trocarFoto(){    
    i++;
    if(i>=imagens.length){
        i=0;
    }
    slider.style.backgroundImage = `url(${imagens[i].src})`;
    console.log(i);
}

window.addEventListener("load",preCarregamento());

setInterval(trocarFoto,1000);