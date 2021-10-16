//Declarando Atributos (caracteristicas dos objetivos)
class Pessoa {
    constructor(nome, sobrenome){ //metodo constructor é uma função, porém não se usa o 'function'
        this.nome = nome; //em javascript todos os atributos são públicos
        this.sobrenome = sobrenome; //podendo ser acessados mesmo fora da class
    }
}

class Carro {
    constructor(modelo){
        this.marca = 'Honda'; //unico atributo com valor fixo
        this.modelo = modelo; //as demais receberão parâmetros
    }
}
