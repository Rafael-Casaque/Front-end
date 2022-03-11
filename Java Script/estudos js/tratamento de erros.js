try{
    document000.write('teste');
}
catch(e){
    document.write(`${e.name} detectado: ${e.message}`);    
}

document.write("<br>")
document.write("<br>")
document.write("<br>")



try{
    var numero=11;
    if(numero>10){
        throw new Error('Valor inválido!');
    }    
    document.write(numero);        
}
catch(e){
    console.log('erro: ',e);
    numero = 10
}
finally{
    document.write(numero);        
}