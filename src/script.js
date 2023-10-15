window.addEventListener('load', () => {
    const form = document.querySelector('.row-novo-alerta');
    const input = document.querySelector('#input-alerta');
    const alertas = document.querySelector('.palavras-alerta');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const palavra_chave = input.value;

        if (!palavra_chave) {
            alert("Não é possível adicionar um alerta vazio.");
            return;
        }

    })
}) 