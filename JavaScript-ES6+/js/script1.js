//Rest/Spread (Juntar/Espalhar) -> ...

function total(...precos){ //precisa ser junto ...+precos
    let total = 0;

    precos.forEach(p => total += p);
    
    return total;
}

console.log(total(23.44, 22, 3.45, 5.67).toFixed(2));

console.log(total(23, 67));

console.log(total(3, 6, 77));

console.log(total());

frutas1  = ['manga', 'uva', 'melancia'];
frutas2 = ['abacate', 'morango', 'jaca'];

let compras = [...frutas1, ...frutas2]; //junta os 2 arrays de forma concatenada
//maneiras lógicas de se chegar no resultado similar
let compras2 = [frutas1, frutas2]; //nesse caso cria 2 arrays dentro de um array pai
let compras3 = [frutas1 + frutas2]; //nesse outro caso, ele junta porém fica desorganizado

console.log(compras);

let alunos = ['Paula', 'Felipe', 'Fernanda'];
let novo = 'Joana';

alunos.push(novo);
console.log(alunos);

let todos = [...alunos, novo];
console.log(todos);
