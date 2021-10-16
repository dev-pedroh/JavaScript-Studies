//Funções Closures é o escopo ou contexto de onde esta sendo acessado a variável

let xuxa = 'global'; //ainda que seja let, por não pertencer a nenhum escopo, ela se torna global

function imprimir(){
    console.log(xuxa);//como dentro desse escopo não possui valor para xuxa, ele procura nas variaveis globais
}
function outra(){
    let xuxa = 'local';
    imprimir();
    console.log(xuxa); //sera impresso o valor de xuxa que existe dentro desse escopo
}

//outra(); //chamamos a função e imprimirá o valor 'global' pois essa função, chama a função imprimir que contem um 'xuxa' sem valor naquele local e entao ela procura nas variaveis globais

//exemplo de escopo local
let variavel = 'global';

function externa(){
    let variavel = 'local'; //mesma variavel de fora, porém é local

    function interna(){
        return variavel;
    }

    return interna;
}

//como a função acima não imprime, precisamos criar uma variável que executa e imprime
let executa = externa();

console.log(executa());