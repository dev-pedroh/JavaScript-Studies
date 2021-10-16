//Herança é criar uma sub class que vai herdar essa classe
//atributos de funcionarios
/*
funcionarios
    nome,
    sobrenome,   como nessas class existem atributos iguais, 
    email,          entra em cena a Herança que aproveita essas 
    cpf,                informações duplicadas, tornando-as mais eficientes
    função,
    registro

clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda

funções
    descrição
    salario
*/

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

//como clientes, funcionarios existem coisas em comum

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

const c1 = new Cliente('Felicity', 'Jones', 'felicity@gmail.com', '046.761.281-18', '6789.44');
const c2 = new Cliente('Angelina', 'Jolie', 'angelina@gmail.com', '046.761.281-19', '6289.44');

console.log(c1);
console.log(c2);

//fazendo acesso a um atributo especifico da class e imprimindo
console.log(c1.nome_completo); 
console.log(c2.nome_completo);

//imputar um nome novo
c1.nome_completo = 'Xuxa Meneguel';

console.log(c1);

const programador = new Funcao('Programados', 4899.50);
const suporte = new Funcao('Suporte', 2799.32);

const f1 = new Funcionario('Pedro', 'Silva', 'pedro@gmail.com', '046.761.281-18', programador, 'f90r3');
const f2 = new Funcionario('Felipe', 'Siqueira', 'felipe@gmail.com', '046.761.281-19', suporte, 'd91r4');

console.log(f1);
console.log(f2);

console.log(f1.funcao.salario);