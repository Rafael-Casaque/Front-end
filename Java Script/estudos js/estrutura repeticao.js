//for

for(i=0;i<=10;i++){
    console.log(2*i);
}

//while verifica a condição primeiro e executa depois

let j=0;

while (j<=10){
    console.log(3*j)    
    j++
}

// do //while executa primeiro e verifica a condição depois

let k=0;

do{
    console.log("ditando...");
    k++;
}while(k<=10)

//for in

//bom pra iterar arrays

let pessoa = {
    nome: 'Rafael', 
    sobrenome: 'Casaque',    
};

for (chave in pessoa){
    console.log(chave,':',pessoa[chave]);
}

let pessoas = [
    'Cris',
    'Gui',
    'Lara',
    'Rafa'
];

for(i in pessoas){
    console.log('nome:',pessoas[i]);
}

//for of

for(pessoa of pessoas){
    console.log('nomew:',pessoa);
} 

//foreach

let mapa = new Map([
    [1,'Cris'],
    [2,'Gui'],
    [3,'Lara'],
    [4,'Rafa']
]);

chaveValor = (val,key) => {
    console.log(`A chave é: ${key} e seu valor é: ${val}`);
}

mapa.forEach(chaveValor);