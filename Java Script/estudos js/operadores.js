//operadores aritméticos: +,-,*,/,**,++,--

console.log(5+5);
console.log(5-5);
console.log(5*5);
console.log(5/5);
console.log(5**5); //operador exponencial

let idade = 20;

console.log(++idade)//operador de incremento
console.log(--idade)//operador de decremento

//operadores comparativos

console.log(1===1); //igualdade restrita, retorna true ou false considerando o tipo de variável
console.log(1=='1'); //igualdade solta, retorna true ou false sem considerar o tipo de variável

//operadores ternários

//expressão condicional inline

valor = 10 > 8 ? 'maior' : 'menor'; //caso a expressão seja verdadeira, retorna o primeiro valor

console.log(valor);

//operadores lógicos: &&,||,!,

//operadores lógicos não booleanos


//No js é possível fazer operação não booleanas, por conta dos conceitos Falsy e Truthy

//basicamente, os valores admitos para Falsy são:

//Falsy:

//undefined
//null
//0
//false
//''
//NaN

//Os valores Truthy são todos que não são Falsy

//explicando o resultado da função seguinte:

console.log(false||'Rafa')
console.log(0||'Cris')
console.log(null||'Gui')
console.log(NaN||'Lara')

let a=10
let b=20

c=a
a=b
b=c

console.log(a)
console.log(b)