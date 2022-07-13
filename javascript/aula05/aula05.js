//console.log('Olá página!');
const h2Element = document.getElementById('teste');
h2Element.style.color = 'red';
//h2Element.style.backgroundColor = 'black';
//h2Element.style.fontSize = '48px';
//console.log(h2Element);

const buttonsElement = document.getElementsByClassName('button');
//console.log(buttonsElement);

const divsElement = document.getElementsByTagName('div');
Array.from(divsElement).forEach((element) => {
    //console.log(element);
});

for (const element of divsElement) {
    //console.log(element);
}
//console.log(divsElement);

const inputElement = document.querySelector('input[type="text"]');
inputElement.addEventListener('keydown', () => {
    console.log('Keydown com sucesso');
});

inputElement.addEventListener('keyup', () => {
    console.log('Keyup com sucesso');
});

inputElement.addEventListener('change', () => {
    console.log('Change com sucesso');
});

const selectElement = document.querySelector('select');
selectElement.addEventListener('change', (e) => {
    const element = e.target;
    console.log('Change com sucesso');
    console.log('O valor selecionado foi: ', element.value);
    element.setAttribute('disabled', 'disabled');
    
})


const firstButtonElement = document.querySelector('button');
//console.log(firstButtonElement);

const allButtonsElement = document.querySelectorAll('button');
//console.log(allButtonsElement);
allButtonsElement.forEach((element) => {
    //console.log(element);
});

const divValorForm = document.querySelector('div.valor_form');
console.log('InnerText: ', divValorForm.innerText);
console.log('InnerHTML: ', divValorForm.innerHTML);
//divValorForm.innerText = '<h1>TESTANDO INNTER TEXT COM HTML</h1>';
//divValorForm.innerHTML = '<h1>TESTANDO INNTER TEXT COM HTML</h1>';
console.log(divValorForm);

divValorForm.setAttribute('curso-rasmoo', 'o melhor');
console.log(divValorForm.getAttribute('curso-rasmoo'));
divValorForm.removeAttribute('curso-rasmoo');

const cancelButtonElement = document.querySelector('button.cancelar');
cancelButtonElement.classList.add('teste');
cancelButtonElement.classList.remove('teste');
console.log(cancelButtonElement.classList.contains('cancelar'));
console.log(cancelButtonElement.classList);

document.querySelectorAll('button.button').forEach((element) => {
    element.classList.remove('button');
    element.style.backgroundColor = 'purple';
    element.style.color = 'white';
});

const newH1Element = document.createElement('h1');
newH1Element.innerText = 'OBA! FUI CRIADO A PARTIR DO JAVASCRIPT';

const divMainContainerElement = document.querySelector('div.main_container');
divMainContainerElement.appendChild(newH1Element);
divMainContainerElement.removeChild(newH1Element);


const confirmarButtonElement = document.querySelector('button.confirmar');
confirmarButtonElement.addEventListener('click', (e) => {
    console.log('Clicado com sucesso');
});

const spanSaldoElement = document.querySelector('span.saldo_atual');
spanSaldoElement.addEventListener('mouseover', () => {
    console.log('Opa! Olha a mãozinha ai rapaz!');
});

spanSaldoElement.addEventListener('mouseout', () => {
    console.log('Opa! Agora melhorou!');
});