//JSON - JavaScript Object Notation 
//utilizado em comunicação entre sistemas

//objeto
const curso = {
    nome: 'Programação em JavaScript',
    horas: 27,
    //function
    preco() {
        return this.horas * 0.67
    }
}

//objeto JavaScript
console.log(curso);
console.log(typeof(curso));
console.log(curso.preco());

//Convertendo o objeto JavaScript para o JSON

//objeto JSON
const json = JSON.stringify(curso);
console.log(json);
console.log(typeof(json));

//principal diferença é o String(formato)
//outro diferença as chaves do JSON ficam entre aspas duplas
//JSON é texto, por isso não tem função

//Convertendo de JSON para objeto JavaScript

const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));

//errado
//const json_errado = "{'nome': 'Programação em JavaScript', 'preco: 27.99'}";
//certo
const json_corrigido = '{"nome": "Programação em JavaScript", "preco": 27.99}';

console.log(json_corrigido);
console.log(typeof(json_corrigido));

const novo_obj = JSON.parse(json_corrigido);
console.log(novo_obj);
console.log(typeof(novo_obj));