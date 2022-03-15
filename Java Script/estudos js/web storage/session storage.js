//local storage: os dados são salvos no browser, caso ele seja fechado, os dados são mantidos
//sesion storage: os dados são salvos por sessão, caso o browser seja fechado os dados são perdidos

/*
    <input type="text" id="name">
    <button id="btn">OK</button>
*/

/*
index2.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="title"></h1>
</body>
<script>
    var title = document.getElementById('title');
    title.innerHTML = sessionStorage.nome;
</script>
</html>
*/

var btn = document.getElementById('btn');
var nome = document.getElementById('name');

function abrirPagina(){
    sessionStorage.nome = nome.value;
    location.assign("index2.html");
}

btn.addEventListener("click",abrirPagina);

//sessionStorage são bons para realizar passagem de variáveis, é uma alternativa para funções e passagem de parâmetros