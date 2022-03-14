document.write(`<a href="https://google.com.br">google</a>`);
document.write("<br>")
document.write(`<a href="https://facebook.com.br">face</a>`);
document.write(`<button id="btn">voltar</button`);
document.write("<br>")
document.write(`<button id="btn2">avançar</button`);
document.write("<br>")
document.write(`<a href="index2.html">pagina2</a>`);

btn = document.getElementById("btn");
btn2 = document.getElementById("btn2");

console.log(history.length); //retorna o tamanho do historico

function voltar(){
    window.history.back(); //volta na página anterior    
}

function avancar(){
    window.history.forward(); //avança para a próxima página    
}

function voltarDuas(){
    window.history.go(-2); //volta duas páginas no histórico
}

function avancarDuas(){
    window.history.go(2); //avança duas páginas no histórico
}

btn.addEventListener("click",voltar);
btn2.addEventListener("click",avancar);