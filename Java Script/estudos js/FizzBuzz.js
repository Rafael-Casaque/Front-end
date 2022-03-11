//criar uma função que:

//retorne 'Fizz' para entradas dividíveis por 3
//retorne 'Fizz' para entradas dividíveis por 5
//retorne 'FizzBuzz' para entradas dividíveis por 3 e 5 
//retorne o valor de entrada quando não for divisível por nenhum
//retorne 'não é um número' caso não seja

function FizzBuzz(entrada){
    if(entrada==null || entrada==undefined || entrada==''){
        return console.log('por favor digite algo!');
    }
    else if(entrada%3==0 && entrada%5==0){
        return console.log('FizzBuzz');
    }
    else if(entrada%3==0){
        return console.log('Fizz');
    }
    else if(entrada%5==0){
        return console.log('Buzz');
    }    
    else if(typeof entrada!=='number'){
        return console.log('não é um número');
    }    
    else{
        return console.log(entrada);
    }
};