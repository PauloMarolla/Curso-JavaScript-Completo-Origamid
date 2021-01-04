const animais = document.getElementById('animais');

console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection[1]);

const primeiraLi = document.querySelector('li');

console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');

console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');

console.log(linkInterno);


const animaisImg = document.querySelectorAll('.animais img');

console.log(animaisImg[0]);


const listHtml = document.getElementsByClassName('grid-section');

const listNode = document.querySelectorAll('.grid-section');


listNode.forEach(function(item, index) {
  console.log(item);
});

const arrayGrid = Array.from(listHtml);

arrayGrid.forEach(function(item) {
  console.log(item);
});


// EXERCICIOS
console.log('exercicios');

const allImg = document.querySelectorAll('img');

allImg.forEach(function(img) {
  console.log(img);
});

const apenasImg = document.querySelectorAll('img[src^="img/imagem"]');

console.log(apenasImg);

const internalLink = document.querySelectorAll('[href^="#"]'); //utilizar ^ quer dizer q eu to pegando os q começam com #

console.log(internalLink);

const h2Animais = document.querySelector('.animais-descricao h2');

console.log(h2Animais);

const lastP = document.querySelectorAll('p');

console.log(lastP[ -- lastP.length]);





