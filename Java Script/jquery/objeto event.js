document.write(`<p class="aa" id="bb">clique!</p>`)
document.write("<div>aaa")
document.write("<br>")
document.write("<div>bbb</div>")
document.write("</div>aaa")

$(document).mousemove(function(event){ //cria o evento mousemove associado ao documento
    //console.log(event.pageX) //imprime o evento da posição do ponteiro do mouse        
})

$('body>p').click(function(event){
    console.log(`objeto clicado ${event.target}`) //imprime o elemento clicado
    console.log(`tag clicada ${event.target.nodeName}`) //imprime o nome do nó do elemento clicado
    console.log(`tag clicada ${event.target.tagName}`) //imprime o nome da tag do elemento clicado
    console.log(`tag clicada ${event.target.className}`) //imprime o nome da classe no elemento clicado
    console.log(`tag clicada ${event.target.id}`) //imprime o nome do id do elemento clicado
})

$('p').dblclick(function(event){
    console.log(`evento acionado ${event.type}, tecla utilizada ${event.which}`) //imprime o elemento clicado    
})

$('p~div').click(function(event){
    console.log(`objeto clicado: ${event.target.tagName}`)
})

$('div>div').click(function(event){
    event.stopPropagation() // para a propagação do filho para seus elementos pai 
    console.log(`objeto clicado: ${event.target.tagName}`)
})