var notas = document.querySelectorAll("td");

for(i= 0; i<=notas.length; i++) {
    if(parseFloat(notas[i].innerHTML)<6){
        notas[i].style.color = "red";
    }
    else if(parseFloat(notas[i].innerHTML)==10){
        notas[i].style.color = "blue";
    }
    else{
        notas[i].style.color = "gray";
    }
}