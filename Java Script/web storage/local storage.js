localStorage.setItem("nome","Rafael"); //define a chave nome com o valor Rafael no localstorage do browser
localStorage.nome = "Rafael"; //mesmo resultado do código acima

//localStorage.removeItem("nome"); //remove a chave e o valor

var pessoa = localStorage.getItem("nome"); //obtem o valor a partir da chave
var pessoa = localStorage.nome; //mesma operação do código acima

console.log(pessoa);

Storage!=undefined? console.log("O browser suporta Web Storage"):console.log("O browser não suporta Web Storage")

localStorage.visitas==undefined? localStorage.visitas=1:localStorage.visitas = Number(localStorage.visitas)+1; //contador de quantas visitas o site teves