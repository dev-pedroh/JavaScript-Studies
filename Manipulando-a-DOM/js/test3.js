// let itexto = document.getElementById('produto');

// console.log(itexto);

// let spans = document.getElementsByTagName('span');

// console.log(spans);

// let spans = document.getElementsByClassName('texto');

// console.log(eles)

//Ler valores

// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

//Alterar valores
// spans[0].textContent = 'JavaScript';
// spans[1].innerHTML = 'Geek Univserity';

//ler apenas um elemento
// let span = document.getElementsByTagName('span')[0];

// console.log(span.innerHTML);

// span.style.textTransform ='uppercase'; //caixa alta

// let inp = document.querySelector('div.container div.row input');//busca pelo primeiro elemento

// let eles = document.querySelectorAll('.texto'); //busca pela class, todos os elementos
// console.log(eles);

// let div1 = document.querySelector('#div1'); //busca pelo Id

// let imp = document.querySelector('input[name=produto]');

// console.log(imp);

//Ex 01

// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('Botão clicado...');
// }

//Ex 02

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}