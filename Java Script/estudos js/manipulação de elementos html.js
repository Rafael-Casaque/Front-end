document.write(`<p>filho1</p>`);

document.write(`<button id="btn">Click</button>`);

var btn = document.getElementById('btn');
var a=1;

var h1 = document.createElement('h1'); //cria o elemento h1
h1.textContent = "rafael"; //cria o conteúdo do elemento

var p = document.createElement('p'); //cria o elemento p
var t = document.createTextNode("isso é um parágrafo") //cria uma nota de texto

document.body.appendChild(h1); // adiciona o elemento ao body
p.appendChild(t); //adiciona a nota ao elemento p
document.body.appendChild(p); // adiciona o elemento ao body

function adicionarElemento(){
    let lista = document.createElement("li");
    let texto = document.createTextNode(`tópico ${a++}`);
    lista.appendChild(texto);
    document.body.appendChild(lista);
}

btn.addEventListener("click",adicionarElemento); //a cada vez clicado cria um novo element p com um texto



//Obtendo irmãos:

document.write(`<p id="p1">pagrafo1</p>`);
document.write(`<p id="p2">pagrafo2</p>`);
document.write(`<p id="p3">pagrafo3</p>`);
document.write(`<p>pagrafo4</p>`);

var p2 = document.getElementById("p2");

p2.previousSibling.innerHTML = "paragrafo1 modificado"; //seleciona o irmão anterior de p2

p2.nextSibling.innerHTML = "paragrafo3 modificado"; //seleciona o próximo irmão de p2

document.body.lastChild.innerHTML = "paragrafo4 modificado"; //seleciona o último filho de body

document.write(`<p id="teste">teste de <code>paragrafo</code> <i>escrito</i> com tags <b>internas</b></p>`);

document.write(`${document.getElementById("teste").innerHTML}`); //innerHTML obtém o conteúdo identico
document.write(`<br>`);
document.write(`${document.getElementById("teste").textContent}`); //obtém apenas o conteúdo de texto
document.write(`<br>`);
document.write(`${document.getElementById("teste").innerText}`); //mesma coisa porém com menor desempenho

//inserção de elemento HTML

var novoParagrafo = document.createElement("p"); //cria o elemento
var conteudoNovoParagrafo = document.createTextNode("conteúdo do novo parágrafo"); //cria o conteúdo do elemento

novoParagrafo.appendChild(conteudoNovoParagrafo); //adiciona o contéudo ao elemento

document.body.appendChild(novoParagrafo);   //adiciona o elemento com o conteúdo no DOM

//remoção de elemento HTML

var elementoRemover = document.body.lastChild; //encontra o elemento

var elementoPai = elementoRemover.parentNode; //encontra o pai do elemento

elementoPai.removeChild(elementoRemover); //com a posição do pai especifica a remoção do filho com sua localização