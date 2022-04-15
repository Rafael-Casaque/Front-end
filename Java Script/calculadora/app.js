class botao{
    constructor(value,attr,fun){                
        let bot = document.createElement("button");                
        bot.setAttribute("class",attr);
        bot.addEventListener("click",fun);
        bot.textContent = value;
        document.querySelector("article").appendChild(bot);
    }    
}

let botaoOcupar = new botao("AC","ocupar");

let botaoAC = new botao("AC","danger");

let botaoC = new botao("AC","attention");

let botaoDivi = new botao("/","calc");

let botao7 = new botao("7","normal");

let botao8 = new botao("8","normal");

let botao9 = new botao("9","normal");

let botaoSoma = new botao("/","calc");

let botao4 = new botao("4","normal");

let botao5 = new botao("5","normal");

let botao6 = new botao("6","normal");

let botaoSubt = new botao("-","calc");

let botao1 = new botao("1","normal");

let botao2 = new botao("2","normal");

let botao3 = new botao("3","normal");

let botaoMult = new botao("*","calc");

botaoOcupar = new botao("AC","ocupar");

let botao0 = new botao("0","normal");

let botaoPonto = new botao(".","normal");

let botaoResu = new botao("=","resu");