//Funções Callback ocorre quando ocorre um evento(execução da função) em cada elemento que for executado

const cursos = [
    'Programação Python',
    'Programação Java',
    'Programação para leigos',
    'Algoritmos e Lógica de Programação',
    'Programção em C',
    'Programação Web com Django Framework',
    'Banco de Dados',
    'Programação JavaScript'
];
function apresentar(curso, indice){
    console.log(`${indice +1} - ${curso}`);
};
//utilizando forEach (ou seja para evento executa)
cursos.forEach(apresentar); //aqui ocorre o callback, em cada evento, ele chama a função de volta

//utilizando lambda
cursos.forEach(function(curso, indice){
    console.log(`${indice +1} - ${curso}`);
});

//utilizando arrow
cursos.forEach((curso,indice) => console.log(`${indice +1} - ${curso}`));


