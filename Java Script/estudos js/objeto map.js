let produto = new Map([ //já inicializa o map com os dois conteúdos
    [12,"Placa de vídeo"], 
    [13,"Placa de captura"]
]);

produto.set("01","Mouse"); //cria os elementos (chave,valor)
produto.set("02","Teclado");
produto.set("03","Monitor");
produto.set("04","Gabinete");

//também pode ser feito de forma encadeada:
//!!! Não pode ser usada ';' no meio ou início do encadeamento 
produto.set("05","Fone")
.set("06","Mousepad")
.set("07","Cooler")
.set("08","Processador");

//ou ainda:

produto.set("09","Memória").set("10","Fonte").set("11","Placa mãe");

console.log(produto.size); //retorna o tamanho do map

console.log(produto.get("01")); //retorna o valor relacionado à chave especificada

for(let i of produto){
    console.log(i); //itera e retorna todos os itens
}

for(let i of produto){
    console.log(i[0]); //itera e retorna apenas as chaves
}

for(let i of produto){
    console.log(i[1]); //itera e retorna apenas os valores
}

produto.delete(12); //deleta o produto com chave 12

produto.delete(13); //deleta o produto com chave 13

console.log(produto)

console.log(produto.has('02')); //retorna true caso exista a chave 02

produto.clear(); //deleta todo o conteúdo do map

console.log(produto)

