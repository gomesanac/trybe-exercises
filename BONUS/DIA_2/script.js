const grid = document.querySelector('#grid');
const verso = document.querySelector('#verso');
const cartas = [
  './cartas/cinco-de-ouros.png',
  './cartas/nove-de-espadas.png',
  './cartas/quatro-de-paus.png',
  './cartas/seis-de-copas.png',
  './cartas/sete-de-espadas.png',
  './cartas/sete-de-paus.png',
  './cartas/tres-de-ouros.png'
];
const animacao = ['gira', 'zoomIn', 'zoomOut'];

function cartaAletoria() {
  let num = Math.round(Math.random() * (cartas.length - 1));
  let cartaSelecionada = cartas[num];
  return cartaSelecionada;
}

function animacaoAleatoria() {
  let num = Math.round(Math.random() * (animacao.length - 1));
  let animacaoSelecionada = animacao[num];
  return animacaoSelecionada;
}

function addCarta() {
  const img = document.createElement('img');
  img.src = cartaAletoria();
  img.classList.add('carta');
  img.classList.add(animacaoAleatoria());
  grid.appendChild(img);
}

function limpaGrid() {
  const imgs = document.querySelectorAll('img');
  for (let i = 0; i < imgs.length; i += 1) {
    grid.removeChild(imgs);
  }
}

verso.addEventListener('click', addCarta);
