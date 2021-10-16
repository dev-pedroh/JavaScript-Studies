//estrutura de repetição usado em conjunto com o Filter e Map
//função de reduzir (coleção de valores em um unico valor)

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];
var soma = 0;

for (var i = 0; i < precos.length; i ++){
    soma = soma + precos[i]; 
}

//console.log(soma);

soma = 0;
//primeira forma
/*
precos.forEach(function(valor){
    return soma = soma + valor;
});
*/
//segunda forma
precos.forEach(function(valor){
    soma += valor; //(soma = soma + valor) reduziu a quantidade de formula em uma unica
});
console.log(soma);

//utilizando reduce
//o reduce reduz os valores do array em um só valor, entregando um somatório
function somar(anterior, atual){
    return anterior + atual;
}

var ret = precos.reduce(somar);
console.log(ret);