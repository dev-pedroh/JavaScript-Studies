//funções de Objetivos

const curso = {
    nome: 'Programação',
    horas: 25,
    preco: 27.99
}
console.log(curso);//
console.log(tupeof(curso)); //apresenta o tipo do curso 'Objeto'
console.log(Object.keys(cursos)); //apresenta somente as chaves
console.log(Object.values(cursos)); //apresenta os valores das chaves
console.log(Object.defineProperties(curso)); //apresenta tudo 'arrays de arrays'

Object.defineProperties(curso).forEach(par => { //par é o valor e chave
    console.log(`${par[0]}: ${par[1]}`);
});

//usando destructuring
Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(curso, 'Publicação', {
    enumerable: false,
    writable: false,
    value: '07/10/2019'
});

curso.publicacao = '01/01/2020';
console.log(curso);
console.log(curso.publicacao);

const outro = {}
Object.defineProperty(outro, '', {
    //aqui se criaria as propriedades
});

Object.freeze(curso); //e um metodo que congela e não permite alteração

curso.nome = 'Dança da Garrafa';

console.log(curso);

//array de objetos

const usuarios = [
    {nome: 'Pedro', empresa: 'BRB'},
    {nome: 'Pedro H', empresa: 'Itau'},
    {nome: 'Pedro Henrique', empresa: 'Banco do Brasil'},
    {nome: 'Sucesso', empresa: 'Nubank'}
]

console.table(usuarios); //apresenta em tabela