class Carro{ //cria a classe Carro
    cor = "vermelho" //cria a variável cor, para ser usada sem o this tem que ser definida antes do construtor
    constructor(){        
        this.cor = 'Vermelho'; //cria a propriedade cor relacionada ao carro
        console.log(`Sou um novo carro ${this.cor}`);
    }
}

class Moto{    
    constructor(cor){         
        this.cor = cor; //usa o parametro como valor para a propriedade        
    }
    info(){
        console.log("Eu sou uma moto ",this.cor); //método para imprimir a informação da moto
    }
}

let c1 = new Carro();
let c2 = new Carro();

let m1 = new Moto("azul"); //passagem de parametro para a propriedade
let m2 = new Moto("verde");

m1.info(); //chama o método info contido no objeto 
m2.info();

delete m1.cor; //delete a propriedade
m1.info();

m1.cor = 'preta'; //altera a propiedade cor da moto1
m1.info();

//Método Setter
//Usado para setar o valor de um atributo

//Método Getter
//Usado para obter o valor de um atributo

class Pessoa{        
    constructor(nome,idade,peso){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.formacao=undefined;
    }
    set tipoFormacao(f){ //forma de instanciar uma função para ser chamada igual atributo
        this.formacao = f;
    }
    get retornarFormacao(){ //forma de retorno para ser obtido como um atributo
        let resposta;
        this.formacao==undefined?resposta="Não há formação registrada":resposta=this.formacao;
        return resposta;
    }
}

let Rafael = new Pessoa();

Rafael.nome = 'Rafael';
Rafael.idade = 20;
Rafael.peso = 80;
Rafael.tipoFormacao = 'Superior, cursando' //chamada da função

console.log(Rafael)
console.log(Rafael.retornarFormacao);

//Static

class aluno{
    static matriculado=true; //faz com que tenha um endereço de memória único, ou seja, o mesmo para todos os objetos
    constructor(prontuario,nome,rg){
        this.prontuario = prontuario;
        this.nome = nome;
        this.rg = rg;        
    }
    info(){
        console.log("Nome do aluno: "+this.nome);
        console.log("Prontuario do aluno: "+this.prontuario);
        console.log("RG do aluno: " +this.rg);        
        let resposta;
        aluno.matriculado==true?resposta = "deferida":resposta = "indeferida"
        console.log("Estado matrícula: "+resposta);
    }
    set mudar(a){
        aluno.matriculado=a;
    }
}

let novoAluno = new aluno(3020576,'Rafael',1231233211);
let novoAluno2 = new aluno(30123123,'Rafaela',4423223211);

novoAluno.info();
novoAluno2.info();

console.log('------------------------')
novoAluno.mudar=false; //essa alteração se reflete em todos os objetos da classe

novoAluno.info();
novoAluno2.info();

//Trablhando com herança

class bicicleta{ //cria a classe bicicleta do método tradicional
    constructor(qtdMarchas,aro){
        this.qtdMarchas = qtdMarchas;
        this.aro =aro;
    }
    get info(){
        console.log("quantidade de marchas: " + this.qtdMarchas);
        console.log("tamanho do aro: "+this.aro);
    }
}

class bicicletaEsportiva extends bicicleta{ //cria a classe bibibletaesportiva com a herança da classe bicicleta
    constructor(qtdMarchas,aro,valor){
        super(qtdMarchas,aro); //envia os parametros para a classe pai
        this.valor = valor;        
    }
    get info(){
        super.info; //aproveita a função já implementada na classe pai
        console.log("valor: "+this.valor);
    }
}

let bike = new bicicleta(6,20);

let bike3 = new bicicleta(6,30);

let bike2 = new bicicletaEsportiva(6,20,5000);
bike2.info;

bicicleta.prototype.velocidadeMaxima = "25km/h" //cria e define a propriedade para todos os objetos dessa classe

bicicleta.prototype.info2 = function(){
    this.info; //chama a função do pai
    console.log("velocidade máxima: "+this.velocidadeMaxima); //imprime a velocidade adquirida com o prototype
}

console.log(bike.velocidadeMaxima)
console.log(bike3.velocidadeMaxima)
