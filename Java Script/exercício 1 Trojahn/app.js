var paragrafo = document.getElementById("paragrafo");
var input = document.getElementById("inp");
var btn = document.getElementById("btn");
var consol = document.getElementById("console");
var array = new Array();

function filtroPar(n){
      let filter;
      n.length%2==0?filter=true:filter=false;
      return filter;
}

function filtroImpar(n){
      let filter;
      n.length%2!=0?filter=true:filter=false;
      return filter;
}

function enviarComando(){
      let comando = input.value;      
      let funcao = comando.split(" ")[0];
      let valor = comando.split(" ")[1];      

      switch(funcao){      

            case 'ADD':      
            if(array.indexOf(valor)==-1){
                  array.push(valor)
                  paragrafo.innerHTML = `${valor} foi adicionado no array!`
            }
            else{
                  alert("esse valor já foi inserido!");            
            }                        
            break

            case 'REM':      
            if(array.indexOf(valor)==-1){
                  alert("esse valor não foi encontrado!")                                    
            }
            else{
                  array.splice(array.indexOf(valor),1)
                  paragrafo.innerHTML = `${valor} foi removido do array!`
            }                        
            break        
            
            case 'EXIST':
                  array.indexOf(valor)!=-1?consol.innerHTML="Console: TRUE":consol.innerHTML="Console: FALSE"
            break
            
            case 'JOIN':
                  let lista = array.join(" ");
                  consol.innerHTML = "Console: " + lista;
            break

            case 'ODD':
                  let listaImpar = array.filter(filtroImpar);
                  consol.innerHTML = "Console: " + listaImpar
            break

            case 'EVEN':
                  let listaPar = array.filter(filtroPar);
                  consol.innerHTML = "Console: " + listaPar
            break

            case 'PRINT':
                  consol.innerHTML = "Console: " + array;
            break

            case 'EXIT':
                  input.setAttribute("readonly","true");
                  paragrafo.innerHTML = "A inserção de novos comando está bloqueada! Recarregue a página para reativá-la"
                  consol.innerHTML = "Console: " + array;
            break
            default:
                  consol.innerHTML = "Console: " + "esse comando não existe, tente novamente!";
      }
      input.value=""
}

function teclar(){
      window.event.key=="Enter"?enviarComando():pass;
}

btn.addEventListener("click",enviarComando);
window.addEventListener("keydown",teclar);