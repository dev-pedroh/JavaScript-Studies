//Função com parâmetros variáveis
function somar(){
    let soma = 0;
    for (let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}
console.log(somar()); //como não foi informado nenhum parâmetro e o 'soma' inicia em '0', imprimirá 0
console.log(somar(2)); // somar = 0 + 2 (a alocação reservada do array corresponde a qtd de parâmetros informados)
console.log(somar(2,5)); //imprime 7
console.log(somar(2,3,5,6)); //neste caso o array repete o 'for' por 4 vezes = o número de parâmetros informados
console.log(somar(2,4,5,4,5,3,6,7));//mesma ocorrência, array = qtd de parâmetros informados

//Nova forma de usar 'for'
//Entendendo o 'arguments' dentro de um for para alocar parâmetros além dos determinados na função

function imprimir_valores(num1, num2){
    for(let i in arguments){ //nova forma de repetição com for (i em argumentos)
        console.log(arguments[i]);
    }
}
//como a função já manda imprimir, não é necessário digitar novamente, só chamar a função

imprimir_valores(); //não imprimirá nada, pois não temos parâmetros informados
imprimir_valores(2,5); //imprimirá as duas alocações
imprimir_valores(2,4,65); //embora, haja somente 2 parâmetros determinados, o 'arguments' está alocando os demais
imprimir_valores(2,4,5,78,4,7);

//Valor Padrão
//ele verificará se o parâmetro 'num1' foi informado, senão ele recebe o valor padrão '1'
function somar2(num1 = 1, num2 = 2, num3 = 3){ // atualmente basta colocar o valor padrão direto na declaração do parâmetro
    return num1 + num2 + num3;
}

console.log(somar2()); //como nada foi informado, ele assume os valores 1+2+3 (determinados como valores padrão)
console.log(somar2(2,4,5,));
console.log(somar2(2,4,5,6,));//ignora o ultimo parâmetro, pois não há array de argumentos, e tbm não há um quarto parâmetros
//devolvendo parâmetros de tipos diferentes
console.log(somar2('a','b','c')); //atualmente, o java concatena as strings e soma, imprimindo = abc
console.log(somar2(true, false, 'c'));//para o Js (true=1) e (false=0), imprimindo =1+0+c = 1c
console.log(somar2(2, true, false)); //imprime = 2+1+0=3

//método de verificação de que o parâmetro recebido não seja diferente de número
function somar3(num1 =1, num2 =2, num3=3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    } else {
        console.log('O parâmetro informado não é um número!');
    }
}