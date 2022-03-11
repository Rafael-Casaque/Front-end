// criação de funções

//Verbo + Substantivo:

//há dois tipos de funções, com retorno e sem retorno

let corSite = "azul"; //define o valor de entrada da cor do site


function mudarCor(cor){
    corSite = cor;
};

function dobrarValor(valor){
    valor = valor*2;
    return valor;
};

//Exemplo de Arrow Function:

var funcaoSoma = (a, b) => a + b; 

//Arrow functions só podem ter uma linha