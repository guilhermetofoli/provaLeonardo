// Implementa acesso para a tela de login
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    //Implementa a estrutura que testa se todos os campos foram preenchidos
    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos!');
        return;
    }else {
        window.location.href = 'cadastro.html';
    }
}

// Cria variável do tipo array
var dadosLista = [];

function salvarTarefa(){
    let nomeTarefa = document.getElementById('nomeTarefa').value;

    if(nomeTarefa){
        dadosLista.push(nomeTarefa);
        console.log(dadosLista);
        criaLista();
        document.getElementById('nomeTarefa').value = '';
        alert('Tarefa cadastrada com sucesso!');
    }else {
        alert("Favor informar uma tarefa para ser cadastrada");
    }

}