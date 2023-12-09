// Função para carregar os dados do localStorage durante a inicialização
function loadLocalStorageData() {
    var storedData = localStorage.getItem('candidatoAplicar');

    if (storedData) {
        var data = JSON.parse(storedData);
        addRow(data.nome, data.email, data.telefone, data.nomeVaga);
    }
}

// Função para adicionar uma nova linha à tabela
document.addEventListener('DOMContentLoaded', function () {
    // Iterar sobre as entradas do localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        // Verificar se a entrada começa com 'candidatoAplicar'
        if (key.startsWith('aplicacao_')) {
            // Obter dados da aplicação do localStorage
            var storedData = JSON.parse(localStorage.getItem(key));

            // Adicionar uma nova linha à tabela
            if (storedData) {
                addTableRow(storedData);
            }
        }
    }
});

function addTableRow(data) {
    var table = document.getElementById("tableClient").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = data.nome;
    cell2.innerHTML = data.email;
    cell3.innerHTML = data.telefone;
    cell4.innerHTML = data.nomeDaVaga;

    // Adicionando um link para download do currículo
    cell5.innerHTML = '<a href="' + data.curriculo + '" download><button style="background-color: var(--main-color); color: white; padding: 5px;">Download Currículo</button></a>';
}

// Função para excluir uma linha da tabela
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
} 