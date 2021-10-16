//Function determines an action
//Function structure
//First Class Citizens / Cidadãos de primeira classe //Higher Order Function

/*
 function name function(arguments entries){   <-- abre a chave para iniciar um parâmetro
        return num1 + num 2; <-- return para retornar a alguma ação
 }              dps coloca o seu comando 
*/

//Ex.: Função para soamr
function somar(num1, num2){
    return num1 + num2;
}
//podemos imprimir de duas maneiras
let ret = somar(2, 9); //criar uma variável para ser impressa no console.log
console.log(ret);
//ou
console.log(somar(2,9)); //executar a função direto dentro do console.log

//Ex.:

function subtrair(num1, num2){
    return num1 - num2;
}
function faz_algo(num1, num2, funcao){ //a função recebe 3 parametros, então na execução deverão ser executados 3 parâmetros
    return funcao(num1, num2); //<-- usa-se parênteses para executar uma função 
}
console.log(faz_algo(5, 5, subtrair)); //como a função tem 3 parametros, deve ser informados tbm 3

//Ex.:

function outra(x){ //lembre-se que dentro do parênteses sempre será o valor a ser recebido
    return x; //nesse passo há o retorno da variável
}

console.log(outra(somar(3,5)));

//ou da maneira mais demorada

let res = somar(5, 7);
console.log(res);

//function com array
let valores = [1, 2.4, true, somar];
                                          //i < valores.length ou seja enquanto i for menor que o tamanho do array
for (let i = 0; i < valores.length; i++){ //let para reservar a variavel i, para esse escopo
    console.log(typeof(valores[i]));
}               //typeof verifica o tipo dos dados (number, string, boolean, function)