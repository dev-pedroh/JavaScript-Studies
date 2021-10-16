class Carro{
    constructor(modelo){
        this._marca = Carro.retornar_marca();
        this._modelo = modelo;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }
    imprimir_dados(){
        console.log(`${this.marca} ${this.modelo}`);
    }

    static retornar_marca(){
        return 'Honda';
    }
}

//instanciando
// isso é uma instanciação, é necessario instanciar um objeto para depois acessá-lo
const fit = new Carro('Fit');
fit.imprimir_dados();

//instanciando estaticamente
//com o método 'static' não é preciso utilizar instância

console.log(Carro.retornar_marca());

//Object.defineProperty(); //Classes sempre começaram com a primeira letra maiuscula

console.log(Math.random());

console.log(Math.PI); //class estática que por exemplo guarda operações matemáticas