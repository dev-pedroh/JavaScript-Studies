//Destructuring é um recurso que permite extrair dados de um array e atribuí-los a novas variáveis

const numeros = [1, 2, 3, 4]; //declarando o array

const [num1, num2, num3, num4] = numeros; //declarando um novo array com incógnitas que receberão os valores extraídos do array

console.log(num1);//imprimindo
console.log(num2);
console.log(num3);
console.log(num4);

//pode-se descartar valores

const [n1, , n3, n4] = numeros;

console.log(n1);
console.log(n3);
console.log(n4);

//pode-se acrescentar valores
//default
const [nu1, nu2, nu3, nu4 = 54, nu5 = 32] = numeros;//ao acrescentar valores, se não houver valores definidos = undefined
// é possível também determinar um valor caso não haja nenhum valor declarado

console.log(nu1);
console.log(nu2);
console.log(nu3);
console.log(nu4);
console.log(nu5);

//Destructuring com Objeto e Template String

const produto = { //declarando função 
    nome: "Playstation 4",
    preco: 1963.22
}

const {nome, preco} = produto; //utilizando objeto

console.log(nome);
console.log(preco);

//com Template
console.log(`O produto ${nome} custa ${preco}`); //nao esqueca que template se utiliza `(crase) 