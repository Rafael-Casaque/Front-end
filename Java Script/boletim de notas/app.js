var estado = false;

class aluno{
    constructor(nome,n1,n2,n3){
        let coluna = document.createElement("tr");
        let celula = document.createElement("td");
        celula.textContent = nome;
        let media = (n1+n2+n3)/3;
        let valores = [n1,n2,n3,media];
        coluna.appendChild(celula);
        for(let i of valores){
            let celula = document.createElement("td");
            celula.textContent = i.toFixed(2);
            i<6?celula.setAttribute("class","reprovado"):celula.setAttribute("class","aprovado");
            coluna.appendChild(celula);
        }   
        let resultado = document.createElement("td");
        if(media<4){
            resultado.textContent = "reprovado";
            resultado.setAttribute("class","reprovado");
        }
        else if(media>6){
            resultado.textContent = "aprovado";
            resultado.setAttribute("class","aprovado");
        }
        else{
            resultado.textContent = "em recuperação";
            resultado.setAttribute("class","recuperacao");
        }
        coluna.appendChild(resultado);
        document.querySelector("table>tbody").appendChild(coluna);
    }
}

function gerarNumeroAleatorio(){
    let n = (Math.random() * 101)/10;
    if(n > 10) {
      return 10;
    }
    return n;
}

//erro

document.querySelector("article>button").addEventListener("click",()=>{
    if(document.querySelector("article>input").value<=0){
        document.querySelector("aside").classList.add("erro");
        setTimeout(()=>{
            document.querySelector("aside").classList.remove("erro")
        },2000);
    }
    else{
        let i=1;
        for(let j of document.querySelectorAll("#cadastrar~button")){
            j.classList.add("visivel2");
        }
        document.querySelector("table>tbody").innerHTML = ''
        document.querySelector("table").classList.add("visivel")
        while(i<parseInt(document.querySelector("article>input").value)+1){
        new aluno(`aluno ${i++}`,gerarNumeroAleatorio(),gerarNumeroAleatorio(),gerarNumeroAleatorio());            
        }                
    }
})

document.querySelector(".green").addEventListener("click",()=>{
    new aluno(`aluno${document.querySelectorAll("tbody>tr").length+1}`,gerarNumeroAleatorio(),gerarNumeroAleatorio(),gerarNumeroAleatorio());
})

document.querySelector(".yellow").addEventListener("click",()=>{
    document.querySelectorAll("tbody>tr").length==1?(
        document.querySelector("table").classList.remove("visivel"),
        document.querySelector(".green").classList.remove("visivel2"),
        document.querySelector(".yellow").classList.remove("visivel2"),
        document.querySelector(".red").classList.remove("visivel2")
    ):(
        document.querySelector("tbody").removeChild(document.querySelector("tbody").lastChild)
    )
})

document.querySelector(".red").addEventListener("click",()=>{
    if(document.querySelectorAll("tbody>tr").length<=1){
        document.querySelector("table").classList.remove("visivel");
        document.querySelector(".green").classList.remove("visivel2");
        document.querySelector(".yellow").classList.remove("visivel2");
        document.querySelector(".red").classList.remove("visivel2");
    }
    else{        
        let array=[];
        for(let i of document.querySelectorAll("table>tbody>tr>td:nth-child(5)")){
            array.push(parseFloat(i.textContent).toFixed(2));    
        }                            
        let piorMedia = Math.min(...array).toFixed(2);        
        for(let i of document.querySelectorAll("table>tbody>tr>td:nth-child(5)")){
            if(i.textContent==String(piorMedia)){
                i.parentElement.setAttribute("class","pior");
                for(let i of document.querySelectorAll(".pior~tr")){                                        
                    i.firstChild.textContent = `aluno ${i.firstChild.textContent.split(" ")[1]-1}`;                    
                }
                document.querySelector("tbody").removeChild(document.querySelector(".pior"));                                            
            }                
            }  
    }            
})