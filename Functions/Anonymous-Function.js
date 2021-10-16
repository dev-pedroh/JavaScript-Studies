//Funções sem nome ou Funções Lambdas

//exemplo normal
let numeros = [1, 2, 3, 4, 5];

function dobrar(x){
    return x*2;
}

let res1 = numeros.map(dobrar);
console.log(res1);

//exemplo com o função sem nome

let res2 = numeros.map(function(x){
    return x*2;
});

console.log(res2);