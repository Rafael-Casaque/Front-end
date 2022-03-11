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



const celular = {
    marca: 'samsung',
    tamanho: "6'",
    preço: 1231
}

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