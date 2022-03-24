document.write(`<button id="btn1">botão</button>`)
document.write(`<button>botão2</button>`)

//Evento Ready

$(document).ready(function(){
    console.log("esse evento dispara quando o documento termina de ser carregado")
})

//Evento Click

$("#btn1").click(function(){
    console.log("esse evento dispara quando o elemento é clidado")
})

//Evento MouseEnter

$("#btn1").mouseenter(function(){
    console.log("esse evento dispara o mouse entra no elemento")
})

//Evento MouseLeave

$("#btn1").mouseleave(function(){
    console.log("esse evento dispara o mouse sai no elemento")
})

//Evento MouseMouse

$("#btn1").mousemove(function(){
    console.log("esse evento dispara o mouse está se movendo dentro do elemento")
})

//Combinando eventos

//$("body").on("click keypress",function(){
//    console.log("esse evento")
//})

//aciona a função para ambos os eventos

//Evento Trigger

$("button~button").click(function(){
    console.log("evento botão 2 acionado")
})

$(document).keypress(function(){
    $("button~button").trigger("click")
}) //o evento de krepress aciona o evento click do elemento button2