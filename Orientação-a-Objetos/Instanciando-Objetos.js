//
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
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}
//Instanciação de Objetos - forma 1
//um objeto é um conjunto de chave e valor
const curso = new Object();
curso.nome = 'Programação JavaScript'; //chave = curso / valor = 'Programa...
curso.preco = 27.99;

console.log(curso);

curso['qtd_alunos'] = 999;

console.log(curso);

delete curso['qtd_alunos']; //deletando valores da chave 
delete curso['preco'];

console.log(curso);

//forma 2 - podemos trabalhar com qualquer tipo de dados
const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante:{
        nome: 'Adobe', //cada atributo é separado por ','
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da paz, 45',
            bairro: 'Nova Lima',
            cidade: 'São Paulo'
        }, //essa virgula, pq estamos lançando chaves dentro do Objeto programa
        filiais: [ //esta usando colchetes pq é um array
            {cidade: 'Rio de Janeiro'},
            {cidade: 'Recife'}
        ]
    }
}

console.log(programa);

console.log(programa.nome);
console.log(programa.fabricante.nome);
console.log(programa.fabricante.filiais.length);
console.log(programa['fabricante']['filiais'].length);

//forma 3

const pessoa = {};

console.log(typeof(pessoa));

pessoa.nome = 'Angelina';
console.log(pessoa);

//forma 4 instanciando objetos a partir das classes

const p1 = new Pessoa('felicity','Sobrenome');

console.log(p1);
console.log(typeof(p1));
console.log(p1.nome);
console.log(p1.sobrenome);

p1.nome = 'Xuxa';
console.log(p1);

p1.falar('Vem aqui baixinho'); //aqui tem o () pq é um metodo get 
p1.comer();
p1.beber();

const fit = new Carro("Fit");
fit.imprimir();

