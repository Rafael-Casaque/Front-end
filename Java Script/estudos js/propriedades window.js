/*
    <button id="git">Abrir GitHub</button>    
    <button id="link">Abrir Linkedin</button>    
    <button id="face">Abrir Facebook</button>    
    <button id="fechar">Fechar Janela</button>
    <button id="rolar">Rolar</button>        
    <div style="height: 1000px; background-color: gray;"></div>
    <iframe src=""></iframe>
    <iframe src=""></iframe>
    <iframe src=""></iframe>
*/

//var minhaJanela = window.open(); //abre uma nova janela no navegador

var git = document.getElementById("git");
var link = document.getElementById("link");
var face = document.getElementById("face");
var fechar = document.getElementById("fechar");
var rolar = document.getElementById("rolar");
var minhaJanela;

function abrirGit(){
    minhaJanela = window.open("https://github.com/Rafael-Casaque","_blank"); //abre o git em uma nova janela
}

function abrirLink(){
    minhaJanela = window.open("https://www.linkedin.com/in/rafael-rocha-casaque-529618203/","_self"); //abre o  linkedin na mesma janela
}

function abrirFace(){
    minhaJanela1 = window.open("https://www.facebook.com/","_blank","width=300,height=300,top=150,left=150"); //abre uma nova janela com resolução 300x300 e centralizada
}

function fecharJanela(){
    minhaJanela.close(); //fecha a janela
}

function rolarJanela(){
    window.scrollBy(0,500); //faz  moviment de scroll o primeiro argumento é scroll horizontal e o segundo é scroll vertical
}

git.addEventListener("click",abrirGit);
link.addEventListener("click",abrirLink);
face.addEventListener("click",abrirFace);
fechar.addEventListener("click",fecharJanela);
rolar.addEventListener("click",rolarJanela);


var largura = window.innerWidth; //retorna o tamanho da largura interna da janela
var altura = window.innerHeight; //retorna o tamanho da altura interna da janela
var posicaoX = window.screenX; //retorna a posiçãoX da janela em relação ao monitor 0 para fullScreen
var posicaoY = window.screenY; //retorna a posiçãoY da janela em relação ao monitor 0 para fullScreen
var quantidadeFrames = window.length; //retorna a quantidade de elementos Iframe na janela

console.log(`${largura}x${altura}`); 
console.log(`${posicaoX}x${posicaoY}`); 
console.log(quantidadeFrames);

window.frames[0].location = "https://umnovocaomeco.web.app"; //vinculo a url ao iframe 0
window.frames[1].location = "index2.html"; //vinculo a url ao iframe 0