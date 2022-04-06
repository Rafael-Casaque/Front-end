var visivel=false;
var tema='dia';
var contador=1;

document.querySelector("header>nav").addEventListener("click",(event)=>{
    if(visivel==false){
        document.querySelector("header>nav>ul").setAttribute("class","visivel");
        visivel=true;
    }
    else{
        document.querySelector("header>nav>ul").removeAttribute("class","visivel");
        visivel=false;
    }
    event.stopPropagation();
})

window.addEventListener("click",()=>{
    document.querySelector("header>nav>ul").removeAttribute("class","visivel")
    visivel=false;    
    document.querySelector(`img[class="grande"]`)!=null?document.querySelector(`img[class="grande"]`).setAttribute("class","tamanho"):1==1;
    for(i of document.querySelectorAll(`img[class="invisivel"]`)){
        i.setAttribute("class","tamanho");
    }
})

function trocarFoto(){    
    document.querySelector("#slide>img").setAttribute("src",`images/${contador}.jpg`);  
    contador++; 
    contador==4?contador=1:1==1;    
}

setInterval(trocarFoto,3000);

document.querySelector("aside>img").addEventListener("click",(event)=>{
    event.stopPropagation();
    if(tema=="dia"){
        document.querySelector("aside>img").setAttribute("src","images/dayMode.png");
        document.querySelector("*").setAttribute("class","images/dayMode.png");
        tema='noite';
        temaEscuro();
    }
    else{
        document.querySelector("aside>img").setAttribute("src","images/nightMode.png");
        tema='dia';
        temaClaro();
    }
})

document.querySelector(`#album>img[src="images/f1.jpg"`).addEventListener("click",(event)=>{        
    aumentar(document.querySelector(`#album>img[src="images/f1.jpg"`));
    event.stopPropagation();
})

document.querySelector(`#album>img[src="images/f2.jpg"`).addEventListener("click",(event)=>{        
    aumentar(document.querySelector(`#album>img[src="images/f2.jpg"`));
    event.stopPropagation();
})

document.querySelector(`#album>img[src="images/f3.jpg"`).addEventListener("click",(event)=>{        
    aumentar(document.querySelector(`#album>img[src="images/f3.jpg"`));
    event.stopPropagation();
})

document.querySelector(`#album>img[src="images/f4.jpg"`).addEventListener("click",(event)=>{        
    aumentar(document.querySelector(`#album>img[src="images/f4.jpg"`));
    event.stopPropagation();
})

document.querySelector(`#album>img[src="images/f5.jpg"`).addEventListener("click",(event)=>{        
    aumentar(document.querySelector(`#album>img[src="images/f5.jpg"`));
    event.stopPropagation();
})

document.querySelector(`#album>img[src="images/f6.jpg"`).addEventListener("click",(event)=>{        
    aumentar(document.querySelector(`#album>img[src="images/f6.jpg"`));    
    event.stopPropagation();
})

document.querySelector(`#album>img[src="images/f7.jpg"`).addEventListener("click",(event)=>{        
    aumentar(document.querySelector(`#album>img[src="images/f7.jpg"`));    
    event.stopPropagation();
})

document.querySelector(`#album>img[src="images/f8.webp"`).addEventListener("click",(event)=>{        
    aumentar(document.querySelector(`#album>img[src="images/f8.webp"`));
    event.stopPropagation();
})

document.querySelector(`#album>img[src="images/f9.jpg"`).addEventListener("click",(event)=>{        
    aumentar(document.querySelector(`#album>img[src="images/f9.jpg"`));
    event.stopPropagation();
})

function aumentar(foto){
    for(i of document.querySelectorAll("#album>img")){
        i.setAttribute("class","invisivel");
    }    
    foto.setAttribute("class","grande");
}

function temaClaro(){
    document.querySelector("header>img").setAttribute("src","images/logo.jpg");
    document.querySelector("nav>a>img").setAttribute("src","images/menu.png");    
    document.querySelector("#p-a>h2").setAttribute("id","h2-claro");    
    document.querySelector("article>p").setAttribute("id","p-claro");    
    document.querySelector("body").setAttribute("id","body-claro");
    document.querySelector("#p-a>div>a").setAttribute("id","a-claro");    
    document.querySelector("#s-a>h2").setAttribute("id","album-claro");    
}

function temaEscuro(){
    document.querySelector("header>img").setAttribute("src","images/logo-n.jpg");
    document.querySelector("nav>a>img").setAttribute("src","images/menu-n.png");
    document.querySelector("#p-a>h2").setAttribute("id","h2-escuro");    
    document.querySelector("article>p").setAttribute("id","p-escuro");    
    document.querySelector("body").setAttribute("id","body-escuro");
    document.querySelector("#p-a>div>a").setAttribute("id","a-escuro");    
    document.querySelector("#s-a>h2").setAttribute("id","album-escuro");    
}