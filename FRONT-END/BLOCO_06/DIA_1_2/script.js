const datePicker = document.getElementById('data-inicio');
datePicker.DatePickerX.init({ format: 'dd/mm/yyyy' });

const selectEstado = document.querySelector('#estado');
const estado = ['Selecione','Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const botaoEnviar = document.querySelector('#enviar');
const botaoLimpar = document.querySelector('#limpar');
const valores = document.querySelectorAll('.valor');
const sectionRespostas = document.querySelector('#respostas');

function createOption() {
    for (let i = 0; i < estado.length; i += 1) {
        const option = document.createElement('option');
        selectEstado.appendChild(option);
        selectEstado[i].innerText = estado[i];
    }
}

function botaoEnvio(event) {
    event.preventDefault();
    for(let i = 0; i < valores.length; i+= 1) {
        const criaDiv = document.createElement('div');
        criaDiv.innerText = valores[i].value;
        criaDiv.className = 'div';
        sectionRespostas.appendChild(criaDiv);
    };
    botaoEnviar.disabled = true; 
}

function botaoLimpa() {
    const divCriada = document.querySelectorAll('.div');
    for(let i = 0; i < divCriada.length; i+= 1) {
        sectionRespostas.removeChild(divCriada[i]);
    };
    botaoEnviar.disabled = false; 
}

window.onload = function () {
    createOption();
}

botaoEnviar.addEventListener('click', function (event) {
    botaoEnvio(event);
});

botaoLimpar.addEventListener('click', botaoLimpa);
