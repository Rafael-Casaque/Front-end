document.write(`<button id="btn">botao1</button>`);
document.write("<br>");
document.write(`<button id="btn2">botao2</button>`);
document.write("<br>");
document.write(`<button id="btn3">botao3</button>`);
document.write(`<form id="form">`);
document.write(`<input id="name" type="text">`);
document.write(`<input id="pass" type="password">`);
document.write("<br>");
document.write(`<input type="checkbox" id="check">`);
document.write(`<button id="sub" type="submit">Enviar</button>`);
document.write(`<button id="res" type="reset">Resetar</button>`);
document.write("</form>");

//Eventos de IU 

window.addEventListener("load",function(){
    console.log("esse evento dispara após a página ser carregada");
})

window.addEventListener("resize",function(){
    console.log("esse evento dispara quando a página é redimensionada");
})

window.addEventListener("scroll",function(){
    console.log("esse evento dispara quando a página é rolada");
})

//Eventos de teclado
//Referência nomes das teclas: https://www.freecodecamp.org/portuguese/news/lista-de-codigos-de-tecla-em-javascript-codigos-de-tecla-de-evento-de-pressionamento-de-tecla-para-enter-barra-de-espaco-backspace-e-outros/

window.addEventListener("keydown",function(){
    if(window.event.key=="Enter"){
        console.log("esse evento dispara quando o usuário pressiona a tecla (repete enquanto a tecla é pressionada)")
    }    
})

window.addEventListener("keyup",function(){
    if(window.event.key==" "){
        console.log("esse evento dispara quando o usuário solta a tecla")
    }    
})

window.addEventListener("keypress",function(){
    if(window.event.key=="w"){
        console.log("esse evento dispara quando a tecla está pressionada")
    }    
})

//Eventos de mouse

document.getElementById('btn').addEventListener("click",function(){
    console.log("esse evento dispara quando o usuário clica e solta");
})

document.getElementById('btn2').addEventListener("dblclick",function(){
    console.log("esse evento dispara quando o usuário clica 2x e solta");
})

document.getElementById('btn3').addEventListener("mousedown",function(){
    console.log("esse evento dispara quando o usuário clica, sem precisar soltar");
})

document.getElementById('btn3').addEventListener("mouseup",function(){
    console.log("esse evento dispara quando o usuário solta o clique, sem precisar ter clicado inicialmente em cima do elemento");
})

document.getElementById('btn3').addEventListener("mousemove",function(){
    console.log("esse evento dispara quando o usuário move o mouse no elemento (não funciona em dispositivos touch screen)");
})

document.getElementById('btn3').addEventListener("mouseover",function(){
    console.log("esse evento dispara quando o mouse estiver em cima do elemento (não funciona em dispositivos touch screen)");
})

document.getElementById('btn3').addEventListener("mouseout",function(){
    console.log("esse evento dispara quando o mouse estiver fora do elemento após estar em cima (não funciona em dispositivos touch screen)");
})

//Eventos de focus

document.getElementById('btn3').addEventListener("focus",function(){
    console.log("esse evento dispara quando o elemento tem o foco")
})

document.getElementById('btn3').addEventListener("focusin",function(){
    console.log("esse evento também dispara quando o elemento tem o foco")
})

document.getElementById('btn3').addEventListener("blur",function(){
    console.log("esse evento dispara quando o elemento perde o foco")
})

document.getElementById('btn3').addEventListener("focusout",function(){
    console.log("esse evento dispara quando o elemento perde o foco")
})

//Eventos de formulário

document.getElementById("name").addEventListener("input",function(){
    console.log("esse evento dispara quando o conteúdo do input é alterado")
})

document.getElementById("check").addEventListener("change",function(){
    console.log("esse evento dispara quando o valor de uma caixa de seleção muda")
})

document.getElementById("form").addEventListener("submit",function(){
    console.log("esse evento dispara quando o form é submetido")
    window.event.preventDefault(); //impede que a página seja carregada após o submit
})

document.getElementById("form").addEventListener("reset",function(){
    console.log("esse evento dispara quando o reset é acionado")
    window.event.preventDefault(); //impede que a página seja carregada após o submit
})

document.getElementById("form").addEventListener("cut",function(){
    console.log("esse evento dispara quando o usuário recorta o conteúdo de um campo")    
})

document.getElementById("form").addEventListener("copy",function(){
    console.log("esse evento dispara quando o usuário copia o conteúdo de um campo")    
})

document.getElementById("form").addEventListener("paste",function(){
    console.log("esse evento dispara quando o usuário cola o conteúdo de um campo")    
})

document.getElementById("form").addEventListener("select",function(){
    console.log("esse evento dispara quando o usuário seleciona um texto em um cmapo do form")    
})

//Eventos de mutação

window.addEventListener("DOMSubtreeModified",function(){
    console.log("esse evento dispara quando uma alteração é feita no documento")
})