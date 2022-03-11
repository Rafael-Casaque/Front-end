//Método Match:


var texto = "rafael rocha casaque";
var texto2 = "rafa ra rafa";
var paragrafo = "rafael 1 2 3 rafael RafaEl rocha casaque";

console.log(texto.match('casa')); //procura a palavra casa dentro da string
console.log(texto.match('home')); //procura a palavra home dentro da string

var res = paragrafo.match(/rafael/gi); //pesquisa todas as ocorrências de rafael sem case-sensitive
res = paragrafo.match(/[ae]/gi); //pesquisa todas as ocorrências de 'a' e 'e' sem case-sensitive
res = paragrafo.match(/[^ae]/gi); //pesquisa todas as ocorrências menos 'a' e 'e' sem case-sensitive
res = paragrafo.match(/[a-g]/gi); //pesquisa todas as ocorrências entre 'a' e 'g' sem case-sensitive (a,b,c,d,e,f,g)
res = paragrafo.match(/[^a-g]/gi); //pesquisa todas as ocorrências com excessão dos entre 'a' e 'g' sem case-sensitive
res = paragrafo.match(/\d/g); //pesquisa todas as ocorrências de números
/*
Modificadores do match:

g => faz com que o método encontre todas as ocorrências
i => realiza a busca sem case-sensitive
m => pesquisa normalmente sem aramazenar em formato de array
*/

/*
Lista de Metacaracteres:

\w => pesquisa somente por letras e números, ignoras espaços e traços
\W => pesquisa somente caracteres diferente de números e letras
\d => pesquisa  apenas números
\D => pesquisa apenas por não números
\s => pesquisa por espaços
\S => pesquisa por não espaços
\b => pesquisa por palavra que comece ou termine em um número
\B => pesquisa por palavra que não comecem ou termine em um número
\O => pesquisa por caracteres nulos
\n => pesquisa quebra de linha
\r => pesquisa caractere de "retorno de carro" ENTER
\t => pesquisa por tabulação TAB
\v => pesquisa por caractere de tabulação vertical
s+ => pesquisa por palavra que contenha uma ou mais letra 's'
*/

console.log(res.length)

console.log(res)


//Método Search:

var paragrafo2 = "rafael 1 2 3 4 5 rafael RafaEl rocha casaque";

res = paragrafo2.search(/rocha/i); //mostra a posição da primeira ocorrência encontrada

console.log(res)

//Método Replace:

res = paragrafo2.replace(/rafael/gi,'RAFA'); //substitui todas as ocorrencia de radael por RAFA sem case-sensitive

console.log(res)

//Método CharAt:

res = paragrafo2.charAt(2); //retorna o caractere contido na posição indicada

console.log(res)

//Método CharCodeAt:

res = paragrafo2.charCodeAt(2); //retorna o código do caractere contido na posição indicada

console.log(res)

//Método fromCharCode:

res = String.fromCharCode(102) //retorna o caractere a partir do código indicado

console.log(res)

//Método Concat:

var paragrafo3 = "treinando manipulação de strings em javascript";

res = paragrafo3.concat(" ou melhor, EcmaScript"," 6"); //concate a string informada ao fim da variável paragrafo3

console.log(res)

//Método IndexOf:

res = paragrafo3.indexOf("mani") //retorna a posição do primeiro caractere, se n encontrar retorna -1

console.log(res)

//Método lastIndexOf:

res = paragrafo3.lastIndexOf("m") //retorna a posição do último caractere, se n encontrar retorna -1

console.log(res)

//Método localeCompare:

paragrafo1 = "teste1"
paragrafo2 = "teste2"

res = paragrafo1.localeCompare(paragrafo2) //retorna 0 se forem iguais e diferente se forem diferentes

console.log(res)

//Método Slice:

res = paragrafo3.slice(3,10); //recorta da posição 3 a 10

console.log(res)

//Método Split

res = paragrafo3.split(" "); //cria um array usando o parametro como separador

console.log(res)

//Método toLowerCase e toUpperCase:

var nome = "raFaEl"

console.log(nome.toLowerCase()) //converte tudo para minúsculo
console.log(nome.toUpperCase()) //converte tudo para maiúsculo

//Método toString:

var numero = 123123;

res = numero.toString();    //converte o número para string
var bin = numero.toString(2); //converte de decimal para binário
var oct = numero.toString(8); //converte de decimal para octal
var hex = numero.toString(16); //converte de decimal para hexadecimal

console.log(res,bin,oct,hex);

//Método trim:

var string = "      teste     "

alert(string)

alert(string.trim()) //remove os espaços em branco antes e dps da string

