 //Template Strings é uma forma moderna de se concatenar Strings com variáveis
 //ex.:
 const idade = 18; //estamos utilizando const, pois este valor não será alterado
 const nome = 'Pedro'; //colocando já em prática o uso de const/let/var

 console.log(nome +' tem '+ idade + ' anos.'); //forma antiga de se fazer, e um pouco confusa

 //Usando Template Strings
 //Obs.: em Template Strings não se utiliza ""/''(aspas duplas/simples), somente ``(crase)
 console.log(`${nome} tem ${idade} anos.`); //${x} 

 //é possível também utilizar operações ou functions dentro da chave
 console.log(`${nome} tem ${idade + 3} anos.`);