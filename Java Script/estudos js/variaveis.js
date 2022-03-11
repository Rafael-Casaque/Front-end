let primeiroNumero = 5; //declaração de variável (variavéis possuem tipagem dinâmica)
const pi = 3.14; //declaração de variável constante, não pode ser alterada após a declaração

//Boa Prática: apenas usar o let quando realmente houver a necessidade de mudança do valor da variável

//tipos de variáveis:

const nome = 'rafael'; //string literal
const idade = 20; //número literal
let estado = true; //booleano
let indefinida; //variável indefinida
const vazia = null; //variável do tipo objeto

let pessoa = {nome:'rafael',sobrenome:'casaque',idade: 20}; //objeto com key e value, semelhante ao dict em python

//ou

let pessoa2 = {
    nome:'cris',
    sobrenome:'romanin',
    idade: 20
};

//arrays

let familia = [1,2,3,4,5,6,7,8,9,10];


//variáveis de valores:     string, numero, boolean, undefined
//variáveis de referência:  object, array  


//variáveis indefinidas não podem ser const

console.log(primeiroNumero+primeiroNumero);
console.log(pi+pi);
console.log(familia)