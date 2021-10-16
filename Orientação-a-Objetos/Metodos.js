class Pessoa {
    constructor (nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    //metodo get and seters
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
    get sobrenome(){
        return this.sobrenome;
    }
    set sobrenome(sobrenome){
        this.sobrenome = sobrenome;
    }
        //criando um metodo
    falar(msg){ //como o msg foi usado como parametro, não foi necessario o this
        console.log(`${this.nome} esta falando ${msg}`); //em qualquer lugar que for usar atributo é necessario o "this"
    }
    comer(){
        console.log(`${this.nome} esta comendo...`);
    }
    beber(){
        console.log(`${this.nome} ${this.sobrenome} esta bebendo...`);
    }
}

class Carro{
    construtor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }
}
