const img = document.querySelector('img');

function callback () {
  console.log('clicou');
}

//img.addEventListener('click', callback);

// currentTarget = oq esta selecionado, this
// target = onde clicou examente
// type = tipo de evento



const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
}

//animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleClickExterno(event) {
  event.preventDefault();
  console.log(event);
  console.log(this);
}

//linkExterno.addEventListener('click', handleClickExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent); ao passar o mouse encima
//h1.addEventListener('mouseover', handleEvent); 
//h1.addEventListener('mousemove', handleEvent); ao mover o mouse

window.addEventListener('resize', handleEvent);
//window.addEventListener('scroll', handleEvent); ao scroll
//window.addEventListener('keydown', handleEvent); quando digitar uma tecla

function handleKeyBoard(event) {
  if(event.key === 'f') {
    document.body.classList.toggle('full-screen');
  }
}

window.addEventListener('keydown', handleKeyBoard);

// AULA 2


const imgs = document.querySelectorAll('img');

function handleImgs(event) {
  console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImgs);
});

// EXERCICIOS

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLinkInterno(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  this.classList.add('ativo'); //event.target é mesma coisa q this
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLinkInterno);
});

const allElements = document.querySelectorAll('body *');

function handleElement(event) {
  console.log(event.currentTarget);
  event.currentTarget.remove();
};

// allElements.forEach((element) => {
//   element.addEventListener('click', handleElement);
// });

function handleText(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleText);








