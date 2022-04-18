class botao{
    constructor(value,attr){                
        let bot = document.createElement("button");                
        bot.setAttribute("class",attr);
        bot.textContent = value;
        document.querySelector("article").appendChild(bot);
        bot.addEventListener("click",()=>{            
            switch(value){
                case "AC":
                    document.querySelector("input").value = "";
                    break;

                case "C":
                    document.querySelector("input").value = document.querySelector("input").value.slice(0,-1);
                    break;

                case "=":                    
                    try{
                        if(eval(document.querySelector("input").value)=="Infinity" || eval(document.querySelector("input").value)=="-Infinity"){                            
                            new error();
                        }
                        else if(String(eval(document.querySelector("input").value))=='NaN'){                            
                            new error();
                        }
                        else{
                            document.querySelector("input").value = eval(document.querySelector("input").value);
                        }                        
                    }                    
                    catch(e){
                        document.querySelector("input").value = ""
                    }
                    break;
                default:
                    if(document.querySelector("input").value.slice(-1)=="+" && value=="+"){                
                        document.querySelector("input").value =  document.querySelector("input").value;
                    }
                    
                    else if(document.querySelector("input").value.slice(-1)=="-" && value=="-"){                
                        document.querySelector("input").value =  document.querySelector("input").value;
                    }
                    
                    else if(document.querySelector("input").value.slice(-1)=="*" && value=="*"){                
                        document.querySelector("input").value =  document.querySelector("input").value;
                    }
                    
                    else if(document.querySelector("input").value.slice(-1)=="/" && value=="/"){                
                        document.querySelector("input").value =  document.querySelector("input").value;
                    }                                        
                    
                    else{
                        document.querySelector("input").value = document.querySelector("input").value + value;
                    }                    
                    break; 
            }
        });
    }
}

let botaoOcupar = new botao(".","ocupar");

let botaoAC = new botao("AC","danger");

let botaoC = new botao("C","attention");

let botaoDivi = new botao("/","calc");

let botao7 = new botao("7","normal");

let botao8 = new botao("8","normal");

let botao9 = new botao("9","normal");

let botaoSoma = new botao("+","calc");

let botao4 = new botao("4","normal");

let botao5 = new botao("5","normal");

let botao6 = new botao("6","normal");

let botaoSubt = new botao("-","calc");

let botao1 = new botao("1","normal");

let botao2 = new botao("2","normal");

let botao3 = new botao("3","normal");

let botaoMult = new botao("*","calc");

botaoOcupar = new botao(".","ocupar");

let botao0 = new botao("0","normal");

let botaoPonto = new botao(".","normal");

let botaoResu = new botao("=","resu");