//o "Map" é utilizado para fazer "TRANSFORMAÇÃO" nos elementos do array
var valores = [2, 4, 6, 8, 10];
console.log(valores);
//array novo para imprimir o dobro dos valores do primeiro array
var dobro = valores.map(function(valor){ //comndo 'map' vai transformar os elementos do array 'valores'
    return valor *2; //map gera um novo array do mesmo tamanho do array original 
});

console.log(dobro);

//alternativa com função separada

function dobrar(valor){
    return valor *2;
}

dobro = valores.map(dobrar);
console.log(dobro);

//encadeando maps para realizar multiplas transformações

function soma_4(valor){
    return valor + 4;
}

function dividir_5(valor){
    return valor / 5;
}
//o primeiro map vai pegar os valores e dobrar, e retornar um array dobrado, o segundo map vai somar +4 a cada elemento e retornar um array somado a 4
var resultado = valores.map(dobrar).map(soma_4).map(dividir_5); //o ultimo vai pegar os valores do array gerado e dividir cada elemento por 5, e retornar
console.log(resultado);

//qual a diferença entre o 'foreach' e o 'map'
//o 'foreach' não gera um novo array, enquanto que o 'map' gera 