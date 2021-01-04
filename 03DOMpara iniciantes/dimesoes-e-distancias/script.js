const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight; 

const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);
//clientHeight - retorna o height + pading
//scrollHeight - retorna o height total, contando scroll

const primeiroH2 = document.querySelector('h2');

const h2Left = primeiroH2.offsetLeft;

//offsetleft - retorna o left do elemento

const h2Rect = primeiroH2.getBoundingClientRect();
//getBoundingClientRect - retorna um objeto com varias informacoes de posicionamento do elemento na tela

console.log(h2Left);
console.log(h2Rect.top);

if(h2Rect.top < 0) {
  console.log('passou do elemento');
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
);

//matchMedia verifica o tamanho da tela, igual no css, retorn TRUE ou FALSE, tem q passar o .matches no final

const small = window.matchMedia('(max-width: 700px)').matches;

if(small) {
  console.log('usuario mobile');
} else {
  console.log('usuario deskptop');
}

// EXERCICIOS

const firstImg = document.querySelector('img');

const distanciaFirtImg = firstImg.offsetTop;

console.log(distanciaFirtImg);

function somaImagens() {
  const fullImg = document.querySelectorAll('img');
  let soma = 0;
  fullImg.forEach((item, index) => {
  soma += item.offsetWidth;
  });
  console.log(soma);
}

window.onload = function() {
  somaImagens();
}

const links = document.querySelectorAll('a');

links.forEach((link) => {
  if(link.offsetWidth > 48 && link.offsetHeight > 48) {
    console.log(link, 'É recomendado');
  } else {
    console.log(link, 'Não é recomendado');
  }
});

const menu = document.querySelector('.menu');
const browser = window.matchMedia('(max-width: 720px)').matches;

console.log(menu);

if(browser) {
  menu.classList.add('menu-mobile');
} else {
  console.log('É acima de 720px');
}



