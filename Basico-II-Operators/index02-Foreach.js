//foreach é uma estrutura de repetição mais moderna (ajuda nos arrays)
var cursos = [ //como o JS não é necessario definir o tipo de dados, para 'array' basta abrir o colchetes
    'Git e GitHub', //para ele entender que se trata de arrays
    'JavaScript',
    'Java',
    'Html',
    'CSS',
    'Python',
    'Algoritimo',
    'Scrum',
];

console.log(cursos);//imprimir na tela o array
console.log(cursos.length);// imprimir o tamanho do array

//defina uma função
function imprimir(cursos, indice){ //função para imprimir que vai receber duas variaveis, o curso para saber qual, e o indice, para posição
    console.log(indice + ' - ' + cursos); //imprima: 
}

cursos.forEach(imprimir); //para cada elemento do array, execute a função

//UTILIZAÇÃO DE FUNÇÃO ANÔNIMA  (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`); //imprime igual ao método anterior
});

//terceira maneira de imprimir
for(var i = 0; i <cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}

