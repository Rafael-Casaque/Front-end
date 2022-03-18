// Js é totalmente dinâmico quanto à natureza de seus objetos

const mouse = {
    cor: 'red',
    marca: 'dazz'
}

console.log(mouse);

mouse.velocidade = 300; //adiciona a propriedade velocidade ao objeto mouse

console.log(mouse);

delete mouse.velocidade; //adiciona a propriedade velocidade ao objeto mouse 

console.log(mouse);


//notação literal

const celular = {
    marca: 'samsung',
    tamanho: "6'",
    preço: 1231
}

console.log(celular.marca) //exibe o valor da propriedade marca

console.log(celular["marca"]) //exibe o valor da propriedade marca

//clonar um objeto

const novoCelular = Object.assign({
    bateria: 5000 //adiciona essa nova propriedade ao objeto criado
}, celular);

console.log(novoCelular);

//ou:

const novoCelular2 = {
    bateria: 6000,
    ...celular};

console.log(novoCelular2);

var objeto = {
    numero1: 10,
    numero2: 5,
    subtracao: function(){
        return this.numero1-this.numero2
    }
}

console.log(objeto.subtracao()) //retorna o valor da funcao subtração




//função para criar objetos

function Grupo(nome1,nome2,nome3,nom4){
    this.nome1 = nome1; //this refere-se ao elemento pai que ele se encontra, portanto a função
    this.nome2 = nome2; //this fora de bloco aponta para o elemento pai window
    this.nome3 = nome3;
    this.nom4 = nom4;
};

var novoGrupo = new Grupo("Cris","Gui","Lara","Rafa");

console.log(novoGrupo);

//construtor de objetos

var marcasCerveja = new Object();

marcasCerveja.nome = "Brahma";
marcasCerveja.volume = 357;

console.log(marcasCerveja);

delete marcasCerveja.volume //deleta a propriedade volume