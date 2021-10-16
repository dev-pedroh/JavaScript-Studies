/* conjuntos não aceitam repetição de valores
    conjuntos não são indexados
*/ 

//declarando um conjunto
let cursos = new Set();

//Adcionado valores
cursos.add('Programação para Leigos');
cursos.add('Algoritmos e Lógica de Programação');

//Adcionar valores concatenados
cursos.add('Programção em C').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');

console.log(cursos);
//tamanho
console.log(cursos.size);

//determinando se determinado elemento esta dentro do conjunto
console.log(cursos.has('Banco de Dados'));

//deletando elementos de um conjunto
let ret = cursos.delete('Programação para Leigos');
console.log(ret);

//filtrando itens repetidos
let frutas = ['Manga', 'Uva', 'Java', 'Uva'];

let frutas_unicas = new Set(frutas);

console.log(frutas_unicas);

