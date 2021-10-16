//Particularidades do Array, array no JS admite qualquer tipo de dados dentro do mesmo array, o array é infinito
//Formas de criação de Array
//Forma 01
var alunos = new Array('Cristina','Joao', 'Maria', 'Carol', 'Pedro');
console.log(alunos);

//Forma 02 (Recommended)
var alunos = ['Cristina','Joao', 'Maria', 'Carol', 'Pedro'];
console.log(alunos);

//Array vazio  
var notas = [];
console.log(notas);

//Acessando indice do array
var notas = [1, 2, 3, 4, 5];
console.log(notas[2]); //[0],[1],[2], ou seja terceira posição 

//Alterando o valor do indice
notas[2] = 12;
console.log(notas);

//Atenção para acesso a indice inexistente
notas[9] = 35; // nesse caso da posição [4]...[9] retorna "empty itens"
// as posições [5],[6],[7] e [8] serão do tipo de dados "undefined"

//Inserindo elementos no final do array

var nomes = ['Paula', 'Lucas', 'Fabio'];
console.log(nomes);

//alterando
nomes.push('Wanessa'); //comando "push" adiciona o nome ao final da lista
console.log(nomes);

//tamanho do array
console.log(nomes.length);
var tam = nomes.length

console.log(tam);

//Ordenando os dados de um array
var alunos = ['Vera', 'Lucia', 'Pedro', 'Paulo', 'Fernanda', 'Gustavo', 'Ana'];
console.log(alunos);

alunos.sort(); //Ordena array de Strings por ordem alfabetica
console.log(alunos);

//array de integer e float o "sort" converte para string e ordena em ordem numerica pelo 1 algarismo

//deletando dados de um array
var idades = [5, 23, 11, 87];
delete idades[3]; //retorna [5, 23, <empty item>, 87]

//deletando elementos de forma clean do array
idades.splice(3,1); //o primeiro item de dentro do parentese '3' determina a partir de que posição deleta e o segundo '1' determina a quantidade de elementos

//adicionando elementos com o mesmo comando "splice"
idades.splice(3, 0, 58, 32, 16); //a partir do 3 elemento, deleta 0, e adiciona os itens

//remover elemento da ultima posição do array

idades.pop();
console.log(idades);

var ret = idades.pop();
console.log(ret);
console.log(idades);

//remover o primeiro elemento de um array
idades.shift();
console.log(idades);

//inserir elemento no inicio de um array
idades.unshift(99);
console.log(idades);


//COMANDO IMPORTANTE!
//RETORNAR UM NOVO ARRAY A PARTIR DO INDICE INFORMADO
var novo = idades.slice(3);
console.log(novo);

//Concatenando dois arrays
var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); //o contrario "rest = impares.concat(pares);" também se aplica
console.log(rest);

//COMO ORDENAR ESSES DOIS ARRAYS DE INFORMAÇÃO
rest.sort(function(a,b){return a-b;}); //a função seleciona os 2 primeiros elementos e retorna 1-2 (menor e coloca em primeiro)
console.log(rest);                     //em seguida, 2 -3 (menor e coloca na ordem)     

//array de array (matriz) Ex.: 4x4
var tabuleiro = [[1,2,3,4], [5,6,7,8],[9,10,11,12],[13,14,15,16]];

/*
    [
        [ 1,  2,  3,  4] linha 1
        [ 5,  6,  7,  8] linha 2
        [ 9, 10, 11, 12] linha 3
        [13, 14, 15, 16] linha 4
    ]     
*/

//acessando elementos do array/array
console.log(tabuleiro[0],[0]); //acessar o elemento 0x0 ou seja (a1) =1
console.log(tabuleiro[3],[3]); //acessar o elemento 3x3 ou seja (c3) =11