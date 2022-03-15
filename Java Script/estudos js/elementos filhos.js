document.write(`<ul id="lista">`);
document.write("<li>um</li>");
document.write("<li>dois</li>");
document.write("<li>três</li>");
document.write("<li>quatro</li>");
document.write("</ul>");

lista = document.getElementById("lista");

var elementosLi = lista.childNodes; //cria um array com os elementos filhos de ul
console.log(elementosLi.length); //retorna a quantidade de filhos de ul

var item = document.createElement("li");
item.textContent = "aaa";

lista.insertBefore(item, lista.firstChild); //insere o item antes do primeiro filho direto da lista
lista.insertBefore(item, lista.childNodes[0]); //mesmo resultado do código acima