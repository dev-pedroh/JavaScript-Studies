//Sobrescrita em ingles - Overwriting

class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao;
    }
    set descricao(descricao){
        this._descricao = descricao;
    }
    get salario(){
        return this._salario;
    }
    set salario(salario){
        this._salario = salario;
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }
    
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }
    
    get cpf(){
        return this._cpf;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }

    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }
    set nome_completo(nome_completo){
        nome_completo = nome_completo.split(' ');//transforma o String em array

        this._nome = nome_completo.shift(); //shift pega o elemento 0 do array
        this._sobrenome = nome_completo.join(' '); //pega o restante do array
    }
    imprimir_dados(){
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}

//criamos uma class Pessoa que vai herdar os atributos para as 'sub_class' Funcionarios e Clientes

class Funcionario extends Pessoa{ // Funcionario herda a class Pessoa
    constructor(nome, sobrenome, email, cpf, funcao, registro){ //declaramos todos os atributos
        super(nome, sobrenome, email, cpf); //super class vem da class mae Pessoa, herda os atributos 
        this._funcao = funcao; // e declara os novos atributos que nao constam na class mae
        this._registro = registro;
    }

    get funcao(){
        return this._funcao;
    }
    set funcao (funcao){
        this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }
    set registro(registro){
        this._registro = registro;
    }
    // é possível utilizar um mesmo método, com função diferente
    //sobrescrita de método
    imprimir_dados(){
        super.imprimir_dados();
        console.log(`Registro: ${this.registro} \nSalário: ${this.funcao.salario}`);
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda(){
        return this._renda;
    }
    set renda(renda){
        this._renda = renda;
    }
}

//instanciando objetos

const prog = new Funcao('Programador', 5987.95);
const f1 = new Funcionario('Paula', 'Fernandes', 'paula@gmail.com', '04676121818', prog, 'f98542');

const c1 = new Cliente('Pedro', 'Henrique', 'pedro@gamil.com', '0676428118', 4689.99);

//f1.imprimir_dados(); //Pessoa

c1.imprimir_dados(); //Pessoa

//Polimorfismo = 2 objetos do mesmo tipo, apresentando comportamentos diferentes, através dos métodos


