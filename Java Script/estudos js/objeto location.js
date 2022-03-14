//usado para manipular a url do site
document.write(`<a href="index2.html#esta#eh#a#segunda#pagina">index2</a>`)
document.write(`<a href="index2.html?numero=10>index2</a>`)
console.log(location.hash) // imprime o parametro passado na url (exemplo href="index2#isso#eh#um#parametro")
console.log(location.hostname) //retorna o endereço do host (por exemplo www.youtube.com) não retorna nada em rede local
console.log(location.href) //retorna a url completa do site atual
//location.href="https://youtube.com.br" //muda a url e vai para o site
console.log(location.origin) //retorna o protocolo, o hostname e o numero da porta
console.log(location.pathname) //retorna o caminho após o protocolo e hostname
console.log(location.port) //retorna o numero da porta
console.log(location.protocol) //retorna o protocolo da url
console.log(location.search)//semelhante ao hash busca o parametro passado na url (exemplo href="index2.html?numero=10")

//com hash e search é necessário splitar e armazenar os parametros em arrays

function redirecionar(){
    location.assign("https://github.com/"); //redireciona a página para a url
    location.replace("https://github.com/"); //redireciona a página para a url e remove a url original do histórico ("sobrescreve")
    location.reload(); //recarrega a página (f5)
}
var btn = document.getElementById('btn');

btn.addEventListener('click',redirecionar);