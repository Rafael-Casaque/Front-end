document.write(`<div>Div principal</div>`)

var xhr = new XMLHttpRequest(); //instancia o objeto XMLHttpRequest na variável

document.querySelector('div').addEventListener('click', function(){ //após realizar o click sobrescreve o html na div
    if (xhr.status==200){
        document.querySelector('div').innerHTML = xhr.responseText;                
    }
})

xhr.open('GET','dadosEscolares.xml',true); //Prepara a solicitação, sendo 3 parÂmetros (o método,a url, solicitação assincrona)
xhr.send(null); //envia o objeto XMLHttpRequest