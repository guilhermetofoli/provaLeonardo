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
var dadosLista = [];

function salvarTarefa(){
    let nomeTarefa = document.getElementById('nomeTarefa').value;
    let valorTarefa = document.getElementById('valorTarefa').value;
    let categoriaTarefa = document.getElementById('categoriaTarefa').value;

    if(nomeTarefa && valorTarefa && categoriaTarefa){
        dadosLista.push({ descricao: nomeTarefa, valor: valorTarefa, categoria: categoriaTarefa });
        console.log(dadosLista);
        criaLista();
         document.getElementById('nomeTarefa').value = '';
         document.getElementById('valorTarefa').value = '';
         document.getElementById('categoriaTarefa').value = '';
         alert('Tarefa cadastrada com sucesso!');
     } else {
         alert("Favor informar a descrição e o valor da tarefa para cadastrá-la.");
     }
}

//Função para preencher a lista de cadastro

function criaLista() {
    let tabela = "<tr><th>Descrição</th><th>Valor</th><th>Categoria</th><th>Ações</th></tr>";
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr>" +
                  "<td>" + dadosLista[i].descricao + "</td>" +
                  "<td>" + dadosLista[i].valor + "</td>" +
                  "<td>" + dadosLista[i].categoria + "</td>" + 
                  "<td>" +
                  "<button class='btn btn-warning' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button>" +
                  "<button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button>" +
                  "</td>" +
                  "</tr>";
    }
    document.getElementById("tabela").innerHTML = tabela;
    somaValores(); // Chama a função para calcular a soma dos valores
}

// Função para excluir tarefa da lista
function excluir(linha) {
    dadosLista.splice(linha - 1, 1);
    criaLista();
}

// Função para editar tarefa da lista
function editar(linha) {
    let tarefa = dadosLista[linha - 1];
    document.getElementById('nomeTarefa').value = tarefa.descricao;
    document.getElementById('valorTarefa').value = tarefa.valor;
    document.getElementById('categoriaTarefa').value = tarefa.categoria;
}

// Função para calcular a soma dos valores
function somaValores() {
    let soma = 0;
    for (let i = 0; i < dadosLista.length; i++) {
        soma += parseFloat(dadosLista[i].valor);
    }
    document.getElementById("soma").innerHTML = "Soma Total: R$ " + soma.toFixed(2);
}
