//Ajax (XMLHttpRequest) - Asynchronous JavaScript and XML

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = function(){
    //limpar o conteúdo da div
    div.innerHTML = '';
    //instanciando objeto ajax
    let ajax = new XMLHttpRequest();
    //abrir uma conexão [método http](GET, POST, PUT, DELETE...)
    ajax.open('GET', `https://api.github.com/users/${input.value}`);
    //enviar a requisição
    ajax.send(null);

    ajax.onreadystatechange = function(){
        //criar um elemento span
        let spanNone = document.createElement('span');

        //criar a variável nome
        let txtNome = '';

        if(ajax.readyState === 4){
            if(ajax.status === 200){
                usuario = JSON.parse(ajax.responseText);

                //se o usuário possui nome
                if (usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                }else {
                    txtNome = document.createTextNode(`O usuário ${input.value} não tem nome!`);
                }
                //Adicionar o texto ao span e o span a div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);

                //limpar o input
                input.value = ''; 
            }else{
                txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);
                //Adicionar o texto ao span e o span a div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
            }
        }
    }
}