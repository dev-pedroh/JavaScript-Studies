//Hoisting (içamento) não é um recurso, apenas um comportamento do JavaScript
//acontece quando eu tento acessar um variável não existente
//ex.:
console.log(nome); //aqui acontece o hoisting para não ocorrer erro (somente no "var")

var nome = 'Pedro'; //declarando e inicializando uma variável

console.log(nome); //imprime normal