//if...else if... else...

let num1 = 1
let num2 = 2

if (num1 > num2) {
    console.log("o primeiro número é maior");
}
else if (num1 < num2) {
    console.log("o segundo número é maior");
}
else {
    console.log("os números são iguais");
}

//switch... case...

let permissao='sd';

switch (permissao) {
    case 'comum':
    console.log("usuário comum");
    break

    case 'gerente':
    console.log("usuário gerente");
    break

    case 'diretor':
    console.log("usuário diretor");
    break

    default:
    console.log("usuário não reconecido"); //caso não se encaixe em nenhuma, vai nessa
}