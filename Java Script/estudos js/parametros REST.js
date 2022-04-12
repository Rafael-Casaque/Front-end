//método para possibilitar a passagem de uma quantidade indeterminada de parametros

soma = (n1,n2) => {
    return n1+n2
};

somaIndeterminada = (...numeros) => {
    let resultado = 0;    
    for(i of numeros) resultado += i;    
    return resultado;
};

//a primeira função pode retornar apenas a soma de 2 valores

console.log(soma(5,6));

//já a segunda pode retornar a soma de qualquer quantidade

console.log(somaIndeterminada(1,2,3,4,5));

console.log(somaIndeterminada(3,4,5,6,7,8,9,0,10,12,21));