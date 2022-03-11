function cadastroPessoa(nome,idade,sexo){
    return{
        nome,
        idade,
        sexo
    }
};

let novaPessoa = cadastroPessoa('Rafael',20,'M');
let novaPessoa2 = cadastroPessoa('Rafaelo',22,'F');
console.log(novaPessoa);
console.log(novaPessoa2);

//Função de Construtor:

function pessoa(nome,idade,sexo){
    this.nome = nome, //o this serve apenas para referenciar o objeto
    this.idade = idade,
    this.sexo = sexo
}

let novaPessoa3 = new pessoa('Cris',19,'F');

console.log(novaPessoa3);