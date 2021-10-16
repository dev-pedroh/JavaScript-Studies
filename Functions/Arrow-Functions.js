//Arrow Function (form reduzida de escrever função)
//forma 1 (normal)
function somar1 (num1, num2){
    return num1 + num2;
}
console.log(somar1(4, 6));

//forma 2
let somar2 = function(num1, num2){
    return num1 + num2;
}
console.log(somar2(4, 6));

//forma 3
let somar3 = somar1;

console.log(somar3(4,6));

//Arrow Function

let somar4 = (num1, num2) =>{ //o arrow é o =>
    return num1 + num2;//linhas de execução são definidas dentro do { }
}
console.log(somar4(4, 6));

//se a função receber somente um parâmetro e executar somente uma linha, pode-se simplificar mais ainda

let dobrar = valor => valor*2; //não precisa escrever o 'function', e parâmetro 'valor' não precisa estar entre parênteses
console.log(dobrar(5));

//Ex.:

function mensagem(){ //não recebe nenhum parâmetro
    console.log("ph-dev"); //somente uma linha de execução, e imprime o string
}
mensagem();

//E.: em Arrow Function
let msg = () => console.log('ph-dev'); //o arrow encaixa como um retorno
msg();