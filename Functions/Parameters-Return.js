//Funções, aprendendo sua estrutura (parâmetros e retornos)

function calcular_idade(ano_nascimento){ //receber os parâmetros dentro do parênteses
    const data = new Date(); // gera a data atual const(constante) data (variável) = new Date (comando busca a data atual padrão)

    const idade = data.getFullYear() - ano_nascimento; //o método 'getFullYear' retorna o ano atual 

    return idade; //método 'return' que devolve o valor final, e esse valor pode ser reutiilizado em outro método
}
console.log(calcular_idade(1992)); 
//ou 
const ret = calcular_idade(1992);
console.log(ret);

//função exemplo sem 'return'
function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento;

    console.log(idade); //neste caso em vez de return, ao final da execução já retorna a impressão
}

//neste caso, não é necessário mandar imprimir, visto que a função faz isso ao final
//basta chamar a função

calcular_idade2(1993);

const data = new Date();

console.log("Data completa: " + data);
console.log("Ano: "+data.getFullYear());
console.log("Mês: "+data.getMonth()); //lembrando que para o JS, começa em 0 janeiro, 1 fevereiro, ... 3 abril
