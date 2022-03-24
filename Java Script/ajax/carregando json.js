document.write(`<div>Div principal</div>`)

var xhr = new XMLHttpRequest(); //instancia o objeto XMLHttpRequest na variável

document.querySelector('div').addEventListener('click', function(){ //após realizar o click sobrescreve o html na div
    if (xhr.status==200){
        conversorJson()
    }
})

xhr.open('GET','dadosEscolares.json',true); //Prepara a solicitação, sendo 3 parâmetros (o método,a url, solicitação assincrona)
xhr.send(null); //envia o objeto XMLHttpRequest

function conversorJson(){
    let newContent='';
    let respostaAjax = JSON.parse(xhr.responseText);
    for (let i=0; i<respostaAjax.dadosEscolares.length; i++){
        newContent += `Aluno: ${respostaAjax.dadosEscolares[i].aluno}, nota: ${respostaAjax.dadosEscolares[i].nota}`;
        newContent += `<br>`
    }
    document.querySelector('div').innerHTML=newContent;
}