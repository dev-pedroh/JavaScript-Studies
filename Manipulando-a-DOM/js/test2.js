function mostrarAlerta(){
    alert('O botão foi clicado!');
}

function mudarTexto(elemento){
    elemento.innerHTML = 'Eu estou avisando...'
}

function mudarCor(){
    // cores em hexadecimal #000000 (black), #FFFFFF (white)
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];
    //Math.floor = seleciona o valor inteiro, tendo em vista que o Math.random gera valores reais
    const numero = Math.floor((Math.random() * cores.length) + 1);  
    
    document.bgColor = cores[numero]; //bgColor foi descontinuada no HTML 4, e agora utiliza-se o backgroundColor que é do CSS
}

function escreverTexto(input){ 
    //document = todo o conteudo da pagina
    let span = document.getElementById('texto'); //getElementById = seleciona o elemento pelo ID, adcionado dentro do ('')

    span.innerHTML = input.value;
}