window.addEventListener('load', () => {

    const form = document.querySelector('.row-novo-alerta')
    const input = document.querySelector('.input-alerta');
    const listaAlertas = document.querySelector('.palavras-alerta');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const alerta = input.value;

        if(!alerta){
            alert('Não é possível criar alerta vazio.');
            return;
        } else {
            const novoAlerta = document.createElement('p');

            novoAlerta.innerText = input.value;

            listaAlertas.appendChild(novoAlerta);

        }
    })
   
})
