var array = [];

if (localStorage.itens == undefined) {
    localStorage.itens = array;
}
else if (localStorage.itens == '') {
    localStorage.itens = array;
}
else {
    array = localStorage.itens.split(",");
}
let exibirArray = () => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
while (true) {
    let comando = prompt("Digite alguma informação: ");

    if (comando == null || comando == '') {
        console.log("---- Itens Registrados ----")
        if (localStorage.itens == '') {
            console.log("Nenhum valor registrado");
        }
        else {
            exibirArray();
        }
        break;
    }
    else {
        if (comando == "clear") {
            array = [];
            localStorage.itens = array;
            console.log("---- Itens Registrados ----");
            console.log("Nenhum valor registrado");
        }
        else if (array.includes(comando) == false) {
            array.push(comando);
            localStorage.itens = array;
            console.log("---- Itens Registrados ----");
            exibirArray();
        }
        else if (array.includes(comando) == true) {
            let posicao = array.indexOf(comando);
            array.splice(posicao, 1);
            localStorage.itens = array;
            console.log("---- Itens Registrados ----");
            if (localStorage.itens == '') {
                console.log("Nenhum valor registrado");
            }
            else {
                exibirArray();
            }
        }
    }
}