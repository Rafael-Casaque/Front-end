var divPrincipal = document.getElementById("div-principal")
var divSecundaria = document.getElementById("div-secundaria")
var botao = document.getElementById("botao")
var estado = 0;
var tmp;

function mudarCor(obj){    
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    obj.style.backgroundColor = `rgb(${r},${g},${b})`;    
}

setTimeout(function(event){
    mudarCor(divPrincipal);
}, 3000);

//realiza a função inserida, após decorrido o tempo indicado
//após 3 seg muda a cor da div
//chama apenas uma vez

function iniciar(){
    tmp = setInterval(function(event){
        mudarCor(divSecundaria);
    }, 3000);
    confirm("a função de mudança de cor por intervalo foi ligada");
    
    //realiza a função inserida, após decorrido o tempo indicado
    //a cada 3 seg muda a cor da div
    //chama idefinidas vezes
}

function parar(){
    clearInterval(tmp); //para o intervalo
    confirm("a função de mudança de cor por intervalo foi desligada");
}

function iniciarParar(){
    if(estado==0){
        iniciar();
        estado=1;
    }
    else if(estado==1){
        parar();
        estado=0;
    }
}

botao.addEventListener("click",iniciarParar);