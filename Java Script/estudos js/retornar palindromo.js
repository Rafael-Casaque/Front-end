document.write(`<input id="input">`);
document.write(`<button id="btn">Adicionar String</button>`)
document.write(`<button id="btn2">Filtrar Palíndromos</button>`)
document.write(`<hr>`);
document.write(`<p id="strings"></p>`);
document.write(`<hr>`);
document.write(`<p id="palindromos"></p>`);

var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var input = document.getElementById("input");
var strings = document.getElementById("strings");
var palindromos = document.getElementById("palindromos");
vetor = []
strings.innerHTML = "palavras digitadas: ";
palindromos.innerHTML =  "palíndromos encontrados: ";

function adicionarStrings(){
    vetor.push(input.value);
    strings.innerHTML = "palavras digitadas: "+vetor;
    input.value = "";
    return input.value;    
}

function filtrarPalindromos(n){
    let filter;
    n.toLowerCase() === n.toLowerCase().split("").reverse().join("").toLowerCase()?filter=true:filter=false;
    return filter;    
}

function escreverPalindromos(){        
    palindromos.innerHTML = "palíndromos encontrados: "+vetor.filter(filtrarPalindromos);
}

btn.addEventListener("click",adicionarStrings)
btn2.addEventListener("click",escreverPalindromos);