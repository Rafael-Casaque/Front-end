//parte do html
//<script src="http://deciphered.com/js/jsonp.js?callback=showEvents"></script> chama o link e passa a função pela url

document.write(`<div>Div principal</div>`)

var newContent = '';

function showEvents(data){    

    for(let i=0; i<data.events.length; i++){  //converte o objeto json para escrita html
        newContent += `<div class="event">`;
        newContent += `<img src="${data.events[i].map}">`;
        newContent += `alt="${data.events[i].location}"`;
        newContent += `<p><b>${data.events[i].location}</b><br>`;
        newContent += data.events[i].date + '</p>';
        newContent += `</div>`
    }
}

document.querySelector('div').addEventListener('click',function(){ //assim que a div for clicada substitui seu conteúdo pelo html resultante do arquivo json
    document.querySelector('div').innerHTML = newContent;
})