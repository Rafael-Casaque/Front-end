const carro = {
    marca:'Ford',
    modelo:'Focus',
    ano:2020,
    info: function informar(){
        console.log(this.marca);
        console.log(this.modelo);
        console.log(this.ano);
    }
}

console.log(carro.marca);

carro.info();