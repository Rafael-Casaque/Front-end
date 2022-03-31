//Painel de conteúdo sanfonado

document.querySelector("#sp1").addEventListener("click", () => {
    let valorOriginal = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível...";
    let valorFinal = "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional). Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.";
    document.querySelector("#js").innerHTML == valorOriginal ? document.querySelector("#js").innerHTML = valorFinal : document.querySelector("#js").innerHTML = valorOriginal;
    document.querySelector("#sp1").innerHTML == "Ver mais" ? document.querySelector("#sp1").innerHTML = "Ver menos" : document.querySelector("#sp1").innerHTML = "Ver mais";
})

document.querySelector("#sp2").addEventListener("click", () => {
    let valorOriginal = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa...";
    let valorFinal = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991. Atualmente, possui um modelo de desenvolvimento comunitário, aberto e gerenciado pela organização sem fins lucrativos Python Software Foundation. Apesar de várias partes da linguagem possuírem padrões e especificações formais, a linguagem, como um todo, não é formalmente especificada. O padrão de facto é a implementação CPython.";
    document.querySelector("#py").innerHTML == valorOriginal ? document.querySelector("#py").innerHTML = valorFinal : document.querySelector("#py").innerHTML = valorOriginal;
    document.querySelector("#sp2").innerHTML == "Ver mais" ? document.querySelector("#sp2").innerHTML = "Ver menos" : document.querySelector("#sp2").innerHTML = "Ver mais";
})

document.querySelector("#sp3").addEventListener("click", () => {
    let valorOriginal = "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento...";
    let valorFinal = `PHP (um acrônimo recursivo para "PHP: Hypertext Preprocessor", originalmente Personal Home Page) é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web. Figura entre as primeiras linguagens passíveis de inserção em documentos HTML, dispensando em muitos casos o uso de arquivos externos para eventuais processamentos de dados. O código é interpretado no lado do servidor pelo módulo PHP, que também gera a página web a ser visualizada no lado do cliente. A linguagem evoluiu, passou a oferecer funcionalidades em linha de comando, e além disso, ganhou características adicionais, que possibilitaram usos adicionais do PHP, não relacionados a web sites.`;
    document.querySelector("#ph").innerHTML == valorOriginal ? document.querySelector("#ph").innerHTML = valorFinal : document.querySelector("#ph").innerHTML = valorOriginal;
    document.querySelector("#sp3").innerHTML == "Ver mais" ? document.querySelector("#sp3").innerHTML = "Ver menos" : document.querySelector("#sp3").innerHTML = "Ver mais";
})

//Painel com abas

document.querySelector("#btn1").addEventListener("click", () => {
    document.querySelector("button~hr~p").innerHTML = "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional). Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.";
    document.querySelector("#btn1").setAttribute("class", "sel")
    document.querySelector("#btn2").setAttribute("class", "uns")
    document.querySelector("#btn3").setAttribute("class", "uns")
})

document.querySelector("#btn2").addEventListener("click", () => {
    document.querySelector("button~hr~p").innerHTML = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991. Atualmente, possui um modelo de desenvolvimento comunitário, aberto e gerenciado pela organização sem fins lucrativos Python Software Foundation. Apesar de várias partes da linguagem possuírem padrões e especificações formais, a linguagem, como um todo, não é formalmente especificada. O padrão de facto é a implementação CPython.";
    document.querySelector("#btn1").setAttribute("class", "uns")
    document.querySelector("#btn2").setAttribute("class", "sel")
    document.querySelector("#btn3").setAttribute("class", "uns")
})

document.querySelector("#btn3").addEventListener("click", () => {
    document.querySelector("button~hr~p").innerHTML = `PHP (um acrônimo recursivo para "PHP: Hypertext Preprocessor", originalmente Personal Home Page) é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web. Figura entre as primeiras linguagens passíveis de inserção em documentos HTML, dispensando em muitos casos o uso de arquivos externos para eventuais processamentos de dados. O código é interpretado no lado do servidor pelo módulo PHP, que também gera a página web a ser visualizada no lado do cliente. A linguagem evoluiu, passou a oferecer funcionalidades em linha de comando, e além disso, ganhou características adicionais, que possibilitaram usos adicionais do PHP, não relacionados a web sites.`;
    document.querySelector("#btn1").setAttribute("class", "uns")
    document.querySelector("#btn2").setAttribute("class", "uns")
    document.querySelector("#btn3").setAttribute("class", "sel")
})

//Janela modal

document.querySelector(".jan>button").addEventListener("click", () => {
    document.querySelector(".jan").setAttribute("class", "fechado");
})

//Visualizador de foto

document.querySelector("#img-js").addEventListener("click", () => {
    document.querySelector("#imagem").removeAttribute("src");
    document.querySelector("#imagem").setAttribute("src", "imagens/js.jpeg");
    document.querySelector("#paragrafo").innerHTML = "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional). Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.";

})

document.querySelector("#img-py").addEventListener("click", () => {
    document.querySelector("#imagem").removeAttribute("src");
    document.querySelector("#imagem").setAttribute("src", "imagens/python.jpg");
    document.querySelector("#paragrafo").innerHTML = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991. Atualmente, possui um modelo de desenvolvimento comunitário, aberto e gerenciado pela organização sem fins lucrativos Python Software Foundation. Apesar de várias partes da linguagem possuírem padrões e especificações formais, a linguagem, como um todo, não é formalmente especificada. O padrão de facto é a implementação CPython.";
})

document.querySelector("#img-ph").addEventListener("click", () => {
    document.querySelector("#imagem").removeAttribute("src");
    document.querySelector("#imagem").setAttribute("src", "imagens/php.jpg");
    document.querySelector("#paragrafo").innerHTML = `PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web. Figura entre as primeiras linguagens passíveis de inserção em documentos HTML, dispensando em muitos casos o uso de arquivos externos para eventuais processamentos de dados. O código é interpretado no lado do servidor pelo módulo PHP, que também gera a página web a ser visualizada no lado do cliente. A linguagem evoluiu, passou a oferecer funcionalidades em linha de comando, e além disso, ganhou características adicionais, que possibilitaram usos adicionais do PHP, não relacionados a web sites.`;
})

//Controle bifurcador 

document.querySelector("#bfe").addEventListener("mouseenter", () => {
    let tamanho = 49.5;
    document.querySelector("#bfe").removeAttribute("class");
    document.querySelector("#bfd").style.display = "none"
    let crescer = setInterval(() => {
        document.querySelector("#bfe").style.width = `${tamanho += 1}%`
        if(tamanho>=100){            
            clearInterval(crescer);
        }
    }, 1)    
})

document.querySelector("#bfe").addEventListener("mouseout", () => {    
    document.querySelector("#bfe").setAttribute("class", "desfocado");
    document.querySelector("#bfe").style.width = `49.5%`
    document.querySelector("#bfd").style.display = "inline"
})

document.querySelector("#bfd").addEventListener("mouseenter", () => {    
    document.querySelector(".r").style.textAlign = "right"
    document.querySelector("#bfe").style.display = "none";
    let tamanho = 49.5;
    document.querySelector("#bfd").removeAttribute("class");    
    let crescer = setInterval(() => {
        document.querySelector("#bfd").style.width = `${tamanho += 1}%`
        if(tamanho>=100){            
            clearInterval(crescer);
        }
    }, 1)    
})

document.querySelector("#bfd").addEventListener("mouseout", () => {    
    document.querySelector(".r").style.textAlign = "left"
    document.querySelector("#bfd").setAttribute("class", "desfocado");
    document.querySelector("#bfd").style.width = `49.5%`
    document.querySelector("#bfe").style.display = "inline"
})