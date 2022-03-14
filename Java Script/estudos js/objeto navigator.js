console.log(navigator.appName) //retorna o nome do browser
console.log(navigator.appVersion) //retorna a versão do browser
console.log(navigator.cookieEnabled) //retorna se os coockies estão habilitados
console.log(navigator.geolocation.getCurrentPosition(localizar,erro)) //caso não for permitida a localização retorna a segunda função
console.log(navigator.language) //retorna o idioma do browser
console.log(navigator.onLine) //retorna se o browser está online
console.log(navigator.platform) //retorna o sistema operacional em que o browser está rodando
console.log(navigator.product) //retorna a engine do browser
console.log(navigator.userAgent) //retorna o agente que foi enviado ao browser

function localizar(pos){
    let cor = pos.coords;
    console.log(`latitude: ${cor.latitude}, longitude: ${cor.longitude}`) //função para obter latitude e longitude atual
}

function erro(){
    console.log("erro");
}