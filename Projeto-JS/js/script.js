// 1) referenciar o input
let input = document.querySelector('input[name=task]');

// 2) referenciar o button
let btn = document.querySelector('#botao');

// 3) referenciar o lista
let lista = document.querySelector('#lista');

let card = document.querySelector('.card');


let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas(){
    //limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';

    for(tarefa of tarefas){
        //Criar o item da lista
        let itemLista = document.createElement('li');

        //Adcionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //Adcionar evento de click no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        //Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        //Adcionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        //Adcionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

//executando a função para renderizar as tarefas
renderizarTarefas();


// 1) Precisamos "escutar" o evento de clique no botão
btn.onclick = function(){
    // 2) Precisamos capturar o valor digitado pelo usuário no input
    let novaTarefa = input.value;

    if(novaTarefa !== ""){

        // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
        tarefas.push(novaTarefa);

         //Executando a função para renderizar as tarefas
         renderizarTarefas();

            //Limpar o input
        input.value = '';
        removerSpans();
    }else{
        //Limpar mensagens de erro (spans)
        removerSpans();

        let span = document.createElement('span');

        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        span.appendChild(msg);

        card.appendChild(span);
    }
}

function removerSpans(){
    let spans = document.querySelectorAll('span');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar){ //será removido do array
    tarefas.splice(tarefas.indexOf(tar.textContent),1);

    //renderiza novamente a tela
    renderizarTarefas();

    //Salva os novos dados no banco de dados
    salvarDadosNoStorage();
}

function salarDadosNoStorage(){
    //todo navegador web possui essa funcionalidade

    localStorage.setItem('tarefas', JSON.stringify(tarefas)); //aqui dentro não pode passar dados array, somente primitivos tipo String...
}