//estrutura de repetição moderna "Filter" para filtrar dados

var numeros = [1,2,3,4,5,6,7,8,9,10]; //array com todos os elementos declarado

function filtrar_pares(n){
    return n % 2 === 0; //se dividir 'n' por 2 e o resultado for 0, é true, se não é false 
}
//Ex.:
//console.log(filtrar_pares(3)); //false
//console.log(filtrar_pares(8)); //true


//são feitas functions que retornam true or false para que sejam utilizadas no filter
function filtrar_impares(n){ 
    return n % 2 !== 0;
}
function filtrar_multiplos_5(n){
    return n % 5 === 0;
}

// filter trabalha com retornos true or false
var ret = numeros.filter(filtrar_pares);
console.log(ret);

ret = numeros.filter(filtrar_impares);
console.log(ret);

ret = numeros.filter(filtrar_multiplos_5);
console.log(ret);

//Outra visualização acerca do assunto para abrir a mente

var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Silas', nota: 10},
    {nome: 'Maria', nota: 9.2},
    {nome: 'Jose', nota: 7.3}
]

function filtrar_notas_maiores_que_8(alunos){
    return alunos.nota > 8;
}

var ret = alunos.filter(filtrar_notas_maiores_que_8);
console.log(ret);

//o map retorna somente o valor lógico
var filtrados = alunos.map(filtrar_notas_maiores_que_8);
//console.log(filtrados);