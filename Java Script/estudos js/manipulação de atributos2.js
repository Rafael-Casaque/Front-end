document.write(`<input type="text" id="destaque">`);
document.write(`<button id="btn">adicionar atributo</button>`);
document.write(`<button id="btn2">remover atributo</button>`);

var paragrafo = document.createElement('p');
var paragrafo2 = document.createElement('p');
var paragrafo3 = document.createElement('p');
var input = document.getElementById('destaque');
var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');

paragrafo.textContent = "Tempo pra pensar, quer parar que cê quer? Viver pouco como um rei ou muito, como um Zé?"
document.body.appendChild(paragrafo);

paragrafo2.textContent = "Porque o guerreiro de fé nunca gela não agrada o injusto, e não amarela"
document.body.appendChild(paragrafo2);

paragrafo3.textContent = "Na trama, tudo os drama turvo, eu sou um dramaturgo conclama a se afastar da lama, enquanto inflama o mundo"
document.body.appendChild(paragrafo3);

var tagsP = document.getElementsByTagName('p');

function adicionarAtributo(){    
    let atributo = document.createAttribute("style");
    atributo.value = "color:red;font-size:25px";
    let num = input.value;
    tagsP[num].setAttributeNode(atributo);
}

function removerAtributo(){
    let num = input.value;
    tagsP[num].removeAttribute("style");
}

btn.addEventListener("click",adicionarAtributo);
btn2.addEventListener("click",removerAtributo);

//document.body.setAttribute("id",5); //cria o atributo id com o valor 5 para o elemento body