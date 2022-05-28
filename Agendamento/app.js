function conversor(milisegundos){
    const msAno = 31536000000;
    const msMes = 2628000000;
    const msSem = 604800000;
    const msDia = 86400000;
    const msHora = 3600000;
    const msMin = 60000;    
    let tempo = milisegundos;
    let acumulador='';        

    if(parseInt(tempo/msAno)>0){
        if(parseInt(tempo/msAno)>1){
            acumulador += `${parseInt(tempo/msAno)} anos`;            
        }
        else{
            acumulador += `1 ano`;
        }
        tempo = tempo - parseInt(tempo/msAno)*msAno;                
    }

    if(parseInt(tempo/msMes)>0){        
        if(parseInt(tempo/msMes)>1){
            acumulador += ` ${parseInt(tempo/msMes)} meses`;                        
        }
        else{
            acumulador += ` 1 mês`;            
        }
        tempo = tempo - parseInt(tempo/msMes)*msMes;
    }    
    
    if(parseInt(tempo/msSem)>0){
        if(parseInt(tempo/msSem)>1){
            acumulador += ` ${parseInt(tempo/msSem)} semanas`;            
        }
        else{
            acumulador += ` 1 semana`;
        }
        tempo = tempo - parseInt(tempo/msSem)*msSem;
    }    

    if(parseInt(tempo/msDia)>0){
        if(parseInt(tempo/msDia)>1){
            acumulador += ` ${parseInt(tempo/msDia)} dias`;            
        }
        else{
            acumulador += ` 1 dia`;
        }
        tempo = tempo - parseInt(tempo/msDia)*msDia;
    }    

    if(parseInt(tempo/msHora)>0){
        if(parseInt(tempo/msHora)>1){
            acumulador += ` ${parseInt(tempo/msHora)} horas`;            
        }
        else{
            acumulador += ` 1 hora`;
        }
        tempo = tempo - parseInt(tempo/msHora)*msHora;
    }    

    if(parseInt(tempo/msMin)>0){
        if(parseInt(tempo/msMin)>1){
            acumulador += ` ${parseInt(tempo/msMin)} minutos`;            
        }
        else{
            acumulador += ` 1 minuto`;
        }
        tempo = tempo - parseInt(tempo/msMin)*msMin;
    }           
    
    return acumulador;
}

document.querySelector("button").addEventListener("click",(e=>{
    e.preventDefault();
    let dataAgendamento = Date.parse(document.querySelectorAll("input")[0].value)    
    const string = document.querySelectorAll("input")[1].value;    
    const horas = parseInt(string.slice(0,2)) * 60000 * 60;
    const minutos = parseInt(string.slice(3)) * 60000;
    dataAgendamento+=horas;
    dataAgendamento+=minutos;    
    dataAgendamento+= (3*60000*60) + 60000;
    const dataAtual = Date.now();    
    if(String(dataAgendamento)=='NaN'){
        alert("Há campos sem serem preenchidos!")
    }
    else{
        if(dataAgendamento-dataAtual<0){
            alert("A data inserida é inválida para agendamento")
        }    
        else{
            alert("tempo restante para o agendamento: "+conversor(dataAgendamento-dataAtual));        
        }
    }    
}))