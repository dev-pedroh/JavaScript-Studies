//primeira coisa a se fazer(neste caso)
//para acessar algum elemento da pagina html
//let (variavel privada) a (var) = document (todo documento '.html') .querySelector (API DOM) ('.link') objeto que quero acessar  
//em JS sempre que for acessar um elemento utiliza-se o '.' antes da class/elemento / quando for ID usa-se '#' / quando tag, vai direto
let a = document.querySelector('.link');

console.log(a.innerText);

//como imprimir um elemento pai
console.log(a.parentNode); //<body>
//acessando o elemento pai do elemento anterior
console.log(a.parentNode.parentNode); //<html>
//acessando o topo
console.log(a.parentNode.parentNode.parentNode); //<!DOCTYPE>

console.log(a.parentNode.parentNode.childNodes); //mostra os nós filhos do html

//acessando o primeiro nó
console.log(a.parentNode.parentNode.firstChild); //

console.log(a.firstChild); //text
console.log(a.lastChild); //body

//verificando elementos irmãos
console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild); //h1

console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling);
