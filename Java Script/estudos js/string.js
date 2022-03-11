//documentação:

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
//https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods

//string tipo primitivo:

const string1 = 'isso é uma string primitiva';

//string tipo objeto:

const string2 = new String('ISSO É UMA STRING OBJETO');

console.log(string1[2]); //retorna o caractere especificado

console.log(string1.slice(0,6)); //retorna o recorte da string

console.log(string1.length); //retorna o tamanho de uma string

console.log(string1.toUpperCase()); //retorna a string em capslock

console.log(string1.toLowerCase()); //retorna a string sem capslock

console.log(string1.search('a')); //retorna a posição do caractere especificado (-1 caso não tenha)

console.log(string1.replace('isso','1550')); //troca o primeiro caractere especificado pelo segundo

console.log(string1.charAt(5)); //retorna o caractere na posição especificada

console.log(string1.concat(', entendeu?')); //concatena a string especificada

console.log(string1.endsWith('a')); //retorna true se o fim da string for igual ao especificado

console.log(string1.startsWith('i')); //retorna true se o início da string for igual ao especificado

//template literal:

const nome = 'Stuart Little';

const mensagem = `prezado fulano, boa tarde!

estou enviando essa mensagem para especificar os requerimentos

At.te.

${nome}, ${2+3};`;

console.log(mensagem);