// var, let and const
//var = declaração de variável global
//let declaração de variável local
//const

//var
var numero = 42; // declaração de var normal
console.log(numero);

numero = numero + 18;
console.log(numero);

//let
for (let i = 0; i < 5; i++){ //o let reserva essa variável somente a esse escopo
    let numero = i * 3;
}
console.log(numero); //nesse exemplo não poderemos acessar a variável "numero" visto que ela está reservada no "for"
console.log(i);

//se declarar a mesma variável com var, ela não haverá problema, mas futuramente pode te prejudicar
//ex.:
var numero = 43;
console.log(numero);
                    //observe que ele não te resguarda de utilizar essa mesma variável posteriormente e pode refletir nos próximos resultados
var numero = 49;
console.log(numero);

//o ideal é utilizar o let
let numero = 43;
console.log(numero);
                    //aqui ele apresentará um SyntaxError, alertando que a mesma variável já declarada e reservada, está sendo declarada novamente
let numero = 65;
console.log(numero);

//const
//quando declarar uma constante que sempre for ser um valor fixo, será sempre o mesmo até o fim do programa
const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

//Constante x Mutação
const curso = {nome: 'ph-dev'}; 
console.log(curso.nome);

//não é possível alterar o valor de um constante
//é possível alterar algum elemento que possua seu próprio valor dentro da constante
//ex.:
//curso = 43; //Erro!
curso.nome = 'Learning Programing'; //isso é chamado de Mutação (mudar o valor do elemento dentro da constante)
console.log(curso.nome);

/*
Dicas para declarar variáveis em JavaScript

- A variável poderá ser alterada? (vai variar?) se sim, use let
- A variável será constante? (não vai variar?) se sim, use const
*/

const valor = 5;

for (let i = 0; i < valor; i++){ //i++ significa incrementar
    console.log(valor - i);
}

/*
Desenhando a lógica por trás do contador
console.log(valor - i) = (5 - 0) primeira posição do 'i' é 0 = 5
console.log(valor - i) = (5 - 1) segunda posição do 'i' é 1 = 4
console.log(valor - i) = (5 - 2) terceira posição do 'i' é 2 = 3
console.log(valor - i) = (5 - 3) quarta posição do 'i' é 3 = 2
console.log(valor - i) = (5 - 4) quinta posição do 'i' é 4 = 1

Obs.: o valor sendo = 5, e o 'i' executando sempre que for '< 5', executa 5 vezes
pois a primeira posição é 0. Depois, 1, 2, 3, 4 e para.
*/