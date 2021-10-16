//Funções construtoras

function Pessoa(n, s, raca = 'Humano'){
    //atributos privados so conseguimos acessa-los dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //atributo público pode ser acessado fora da função construtora
    this.raca = raca;

    //metodo privado so conseguimos acessa-lo dentro da função construtora
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    //metodo privados conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function(){
        return idade;
    }
}
//instanciando um objeto
const angelina = new Pessoa("Angelina", "Feminina");

console.log(angelina);

//se tentarmos fazer acesso a atributos privados
console.log(angelina.peso); //retorna undefined (peso = let)

//se tentarmos fazer acesso a atributos publicos
console.log(angelina.raca);

angelina.fazer_aniversario(); //publico

//instanciando um novo objeto
const felicity = new Pessoa("Felicity", "Feminino");

felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof(Pessoa));
console.log(typeof(felicity));