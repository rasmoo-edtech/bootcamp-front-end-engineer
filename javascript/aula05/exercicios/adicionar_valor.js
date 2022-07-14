const confirmarButtonElement = document.querySelector('button.confirmar');
const cancelarButtonElement = document.querySelector('button.cancelar');
const valorInputElement = document.querySelector('input[type="text"]');
const displaySaldo = document.querySelector('span.saldo_valor');

let saldoAtual = 0;
confirmarButtonElement.addEventListener('click', () => {
    deleteMessage();

    if (isValorValid(valorInputElement.value)) {
        saldoAtual = saldoAtual + +valorInputElement.value;
        displaySaldo.innerText = saldoAtual;
    } else {
        showMessage('Valor informado inválido.');
    }

    limparInputValor();
});

cancelarButtonElement.addEventListener('click', () => {
    limparInputValor();
});

valorInputElement.addEventListener('keydown', (event) => {
    const keyCode = event.which ? event.which : event.keyCode

    if (keyCode > 31 && (keyCode < 48 || keyCode > 57)) {
        event.preventDefault();
    }
});

function limparInputValor() {
    valorInputElement.value = '';
}

function isValorValid(number) {
    return +number;
}

function deleteMessage() {
    const smallElement = document.querySelector('small');

    if (smallElement) {
        smallElement.remove();
    }
}

function showMessage(message, type) {
    const messageElement = document.createElement('small');
    messageElement.style.color = 'red';
    messageElement.innerText = message;
    valorInputElement.after(messageElement);
}