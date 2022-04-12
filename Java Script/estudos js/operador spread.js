const notas = [7,6,8,9,5,7,6,8,9,10,5,7,6];

console.log(notas); //retorna um array

console.log(...notas); //explode e retorna os elementos individuas

//Exemplo:

const idades = [20,19,22];

soma = (n1,n2,n3) => {return n1+n2+n3}

console.log(soma(idades[0],idades[1],idades[2])); //retorna a soma das idades

//como o spread explode os ementos, esse parâmetro poderia ser passado assim:

console.log(soma(...idades));

//também serve para fazer concatenações

const n1 = [1,2,3];
const n2 = [4,5,6];
const n3 = [7,8,9];

const n4 = [...n1, ...n2, ...n3];

console.log(n4);