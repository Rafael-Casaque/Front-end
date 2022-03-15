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