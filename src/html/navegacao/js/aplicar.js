function formatTelNumber(input) {
    // Remove tudo, exceto os números
    var telNumber = input.value.replace(/\D/g, '');

    // Aplica a máscara de telefone
    if (telNumber.length === 12) {
        input.value = `+${telNumber.substring(0, 2)} (${telNumber.substring(2, 4)}) ${telNumber.substring(4, 8)}-${telNumber.substring(8, 12)}`;
    } else if (telNumber.length === 11) {
        input.value = `(${telNumber.substring(0, 2)}) ${telNumber.substring(2, 7)}-${telNumber.substring(7, 11)}`;
    } else if (telNumber.length > 2 && telNumber.length <= 10) {
        input.value = `(${telNumber.substring(0, 2)}) ${telNumber.substring(2, 6)}-${telNumber.substring(6, 10)}`;
    } else {
        input.value = telNumber;
    }
}

// Anexar curriculo
document.addEventListener('DOMContentLoaded', function () {
    var inputCurriculo = document.getElementById('curriculo');
    var curriculoDisplay = document.getElementById('curriculoDisplay');
    
    inputCurriculo.addEventListener('change', handleFileSelect);

    function handleFileSelect(event) {
        var curriculoFile = event.target.files[0];

        if (curriculoFile) {
            curriculoDisplay.textContent = 'Currículo anexado: ' + curriculoFile.name;
        } else {
            curriculoDisplay.textContent = '';
        }
    }
});

document.getElementById('btnAplicar').addEventListener('click', function() {
    // Obtenha os valores dos campos
    var curriculo = document.getElementById('curriculo').value;
    var descricao = document.getElementById('descricao').value;
    var disponibilidadeImediato = document.querySelector('input[name="fav_language"]:checked');
    var disponibilidadePresencial = document.querySelector('input[name="fav_language"]:checked');

    // Verifique se todos os campos estão preenchidos
    if (curriculo && descricao && disponibilidadeImediato && disponibilidadePresencial) {
        alert('Aplicação realizada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos antes de aplicar.');
    }
});

document.getElementById('btnAplicar').addEventListener('click', function () {
    // Obter os valores do formulário
    var nome = document.getElementById('first-name').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('phone').value;
    var nomeDaVaga = document.querySelector('.cabecalho-aplicar h2').textContent;
    var descricao = document.getElementById('descricao').value;

    // Converter o currículo para uma string e armazenar no localStorage
    var inputCurriculo = document.getElementById('curriculo');
    var curriculoString = '';

    if (inputCurriculo.files.length > 0) {
        var curriculoFile = inputCurriculo.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            curriculoString = e.target.result;

            // Criar um ID único para esta aplicação
            var aplicacaoId = 'aplicacao_' + Date.now();

            // Criar um objeto com os dados da aplicação, incluindo o currículo
            var aplicacaoData = {
                nome: nome,
                email: email,
                telefone: telefone,
                nomeDaVaga: nomeDaVaga,
                descricao: descricao,
                curriculo: curriculoString
            };

            localStorage.setItem(aplicacaoId, JSON.stringify(aplicacaoData));

            // Limpar os campos do formulário
            clearFormFields();
        };

        reader.readAsDataURL(curriculoFile);
    } else {
        alert('Por favor, anexe seu currículo antes de aplicar.');
    }
});

// Função para limpar os campos do formulário
function clearFormFields() {
    document.getElementById('first-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('curriculo').value = '';
    document.getElementById('curriculoDisplay').textContent = '';
    document.getElementById('descricao').value = '';
    document.querySelector('input[name="fav_language"][value="CSS"]').checked = false;
    document.querySelector('input[name="fav_language"][value="HTML"]').checked = false;
    document.querySelector('input[name="fav_language2"][value="CSS"]').checked = false;
    document.querySelector('input[name="fav_language2"][value="HTML"]').checked = false;
}