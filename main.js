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

//Função para preencher a lista de cadastro

function criaLista() {
    let tabela = "<tr><th>Descrição</th><th>Valor</th><th>Categoria</th><th>Ações</th></tr>";
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr>" +
                  "<td>" + dadosLista[i] + "</td>" + // Adiciona o valor em "Descrição"
                  "<td></td>" + // Coluna "Valor" vazia
                  "<td></td>" + // Coluna "Categoria" vazia
                  "<td>" +
                  "<button class='btn btn-warning' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button>" +
                  "<button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button>" +
                  "</td>" +
                  "</tr>";
    }
    document.getElementById("tabela").innerHTML = tabela;
}