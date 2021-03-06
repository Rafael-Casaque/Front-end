//funções e métodos dos arrays

var array = [1,2,3,4,5];

array.unshift(0); //adiciona o elemento especificado ao início do array 

console.log(array);

array.splice(1,3,'um','dois','três'); //substitui o recorte especificado pelos elementos inseridos

console.log(array);

array.push(6); //adiciona o elemento especificado ao final do array 

console.log(array);

console.log(array.indexOf('três')); //retorna o indice do elemento especificado

const numero_removido = array.pop(); //remove o último elemento do array

console.log(numero_removido);

console.log(array);

const numero_removido2 = array.shift(); //remove o primeiro elemento do array

console.log(numero_removido2);

console.log(array);

console.log(array.splice(2,2)); //remove o(s) elemento especificado

const array2 = [1,2,3];

const array3 = [4,5,6];

console.log(array2.concat(array3)); //concatena o array3 ao array2

// concatenando usando o spread

const concatenado = [...array2,'aaa',...array3,'bbb'];

console.log(concatenado);

const array4 = ['um','dois','três'];
const string1 = 'um,dois,três';

console.log(array4.join('-')); //inclui o elemento no lugar de cada virgula

const array5 = string1.split(',');

console.log(array5); // quebra a string baseado no seletor especificado

array = [1, 2, 3, 4, 5]

for (let i in array) { //percorre e exibibe as posições do array console="0,1,2,3,4"
    //console.log(i);
}

for (let i of array) { //percorre e exibibe o conteúdo do array console="1,2,3,4,5"
    //console.log(i);
}

array.push('seis'); //adiciona um elemento ao final do array

console.log(array);

array.unshift('zero'); //adiciona um elemento ao começo do array

console.log(array);

array.shift(); //remove o primeiro elemento do array

console.log(array);

array.pop(); //remove o primeiro elemento do array

console.log(array);

array.splice(2, 1); //primeiro argumento é o índice base e o segundo argumento é quantos elementos serão retirados a partir da base

console.log(array);

array.splice(-1, 1) //toma o último elemento como base e remove um elemento contando com ele

console.log(array);

array.splice(2, 1, 'três', 'quatro', 'cinco') //a partir da posição 2 remove um elemento e insere os argumentos  

console.log(array);

array.splice(2, 0, 'TRÊS') //empurra o segundo elemento e insere o argumento inserido 

console.log(array);

var novoArray1 = [1, 2, 3, 4, 5];

var novoArray2 = novoArray1.slice(); //copia o conteúdo integral de array1 para array2

var novoArray3 = novoArray1.slice(-2); //copia o conteúdo de array1 a partir do antepenúltimo elemento

var novoArray4 = novoArray1.slice(2) //copia o conteúdo de array1 a partir do índice 2

novoArray1.pop();

console.log(novoArray1);

console.log(novoArray2);

console.log(novoArray3);

console.log(novoArray4);

novoArray2 = novoArray2.reverse(); //inverte a ordem dos elementos do array

console.log(novoArray2);

novoArray2.sort();

console.log(novoArray2);

novoArray2.push(3)

console.log(novoArray2.indexOf(3)); //procura da esquerda pra direita e retorna a posição do primeiro que achar

console.log(novoArray2.lastIndexOf(3)); //procura da direita pra esquerda e retorna a posição do primeiro que achar

//Método Map

novoArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//o método map percorre o vetor da esquerda para e direita realizando a função para cada elemento

novoArray2 = novoArray1.map(function(valor) {
    return valor + 5; //valor se comporta como o elemento do vetor
})

function somar(valor) {
    return valor + 10;
}

console.log(novoArray1.map(somar));


//Método Filter

novoArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function par(inp) {
    let filter;
    inp % 2 == 0 ? filter = true : filter = false;
    return filter;
}

console.log(novoArray1.filter(par));

//Método Reduce

//percorre o vetor somando todos os elementos

var resultado = novoArray1.reduce(function(acc, val) {
    return acc + val;
})

console.log(resultado);