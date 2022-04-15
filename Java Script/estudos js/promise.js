//Nessa função o interpretador ignora o setTimeout e percorre direto retornando o contador como 0

let contar = (n) =>{
    let contador = 0
    let t = setTimeout(() => {
        for(let i=1; i<n; i++){
            contador = i;
        }                
    },2000);    
    return contador;
}

//Para lidar com isso pode ser empregado a promise

let contar2 = (n) =>{
    let contador = 0
    let t = setTimeout(() => {
        for(let i=1; i<n; i++){
            contador = i;
        }                
    },2000);    
    return contador;
}