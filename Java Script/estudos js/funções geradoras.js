//função geradora devolve um iterator

function* cores(){
    yield 'Vermelho';
    yield 'Verde';
    yield 'Azul';
    yield 'Amarelo';
    yield 'Rosa';
    yield 'Branco';
}

for(let i of cores()){
    console.log(i); //retorna cada cor da função
}

let c = cores(); //instancia a função geradora

console.log(c.next()); //retorna a próxima iteração
console.log(c.next()); //retorna a próxima iteração
console.log(c.next()); //retorna a próxima iteração
console.log(c.next()); //retorna a próxima iteração
console.log(c.next()); //retorna a próxima iteração
console.log(c.next()); //retorna a próxima iteração

function* cores2(){
    let c=0;
    while(c<5){
        yield console.log(c);
        c++
    }
}

let c2 = cores2();

console.log(c2);

console.log(c2.next());
console.log(c2.next());