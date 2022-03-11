var palavras = ["chocolate", "gelatina", "perfume", "garrafa", "escrivaninha", "pescaria", "smartphone", "embalagem", "panqueca", "carteira", "documento", "janela", "teclado", "violino", "cobertor", "mesanino", "programa"];
var palavraEscolhida;
var forca = document.getElementById("forca");
var palavraEscolhida2 = document.getElementsByTagName("input");
var main = document.getElementById("palavra");
var foto = 1
var letrasInseridas = [];
var botao = document.getElementById("botao");
var acertos = 0;

function inteiroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function sortearPalavra() {
    palavraEscolhida = palavras[inteiroAleatorio(0, 17)];
    for (let i = 11; i >= palavraEscolhida.length; i--) {
        palavraEscolhida2[i].style.display = "none";
    }
    for (let i = 0; i < palavraEscolhida.length; i++) {
        palavraEscolhida2[i].value = `${palavraEscolhida[i]}`;
    }
    return palavraEscolhida;
}

function compararLetras() {
    let letra = document.getElementById("letra").value;
    if (letra.length == 0) {
        alert("Digite algo!")
    }
    else {
        if (letrasInseridas.indexOf(letra) == -1) {
            letrasInseridas.push(letra);
            if (palavraEscolhida.indexOf(letra) == -1) {
                forca.style.backgroundImage = `url(imagens/${6 - foto}.png)`;
                if (foto >= 6) {
                    forca.style.backgroundImage = `url(imagens/${6 - foto}.png)`;
                    window.location.replace("perdeu.html");
                    foto = 6;
                }
                else {
                    foto++
                }
            }
            else {
                for (let i = 0; i < palavraEscolhida.length; i++) {
                    if (palavraEscolhida2[i].value == letra) {
                        palavraEscolhida2[i].style.color = "white";
                    }
                }
                let regex = new RegExp(`${letra}`,"g");
                acertos+=palavraEscolhida.match(regex).length;              
                if (acertos >= palavraEscolhida.length) {
                    window.location.replace("ganhar.html");
                }
            }
        }
        else {
            alert(`Essa letra já foi digitada!\nLetras digitadas: ${letrasInseridas}`);            
        }
    }    
}

function teclar(){
    if(window.event.key=="Enter"){
        compararLetras();
        letra.value = "";
    }
}

function clicar(){  
    compararLetras();
    letra.value = "";
}

sortearPalavra();
botao.addEventListener("click", clicar);
window.addEventListener("keydown", teclar);