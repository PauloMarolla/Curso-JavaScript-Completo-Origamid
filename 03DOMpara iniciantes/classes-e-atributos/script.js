// const menu = document.querySelector('.menu');

// menu.classList.add('ativo', 'teste');
// menu.classList.remove('azul');
// menu.classList.toggle('azul'); remove/ativa

// if(menu.classList.contains('azul')) { rerifica se contem
//   menu.classList.add('tem-azul')
// } else {
//   menu.classList.add('nao-tem-azul')
// };

//menu.className += ' vermelho'; jeito antigo de add classe

// const animais = document.querySelector('.animais');


// console.log(animais.attributes[0]);
// console.log(animais.attributes['data-texto']);


// methodo () propriedade
// existem propriedades q podem reescrever, exemplo ClassName = '';
// outras, apenas leitura.

const img = document.querySelector('img');

const srcImg = img.getAttribute('src');

console.log(srcImg);

img.setAttribute('alt', 'é uma raposa'); // add ou reescreve um atributo

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);


// EXERCICIOS


const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('ativo');
  console.log(item);
});

itensMenu.forEach((item, index) => {
  if(index >= 1) {
    console.log('nao add');
  } else {
    item.classList.remove('ativo');
  }
  console.log(item);
});

const siteImgs = document.querySelectorAll('img');

siteImgs.forEach((img) => {
  const possuiAlt = img.hasAttribute('alt');
  console.log(img, possuiAlt);
});


// primeiro seleciona a tag do HTML depois o ATRIBUTO
const linkExterno = document.querySelector('a[href^="htpps:/www.webllize.com"]');

linkExterno.setAttribute('href', 'www.facebook.com');

console.log(linkExterno);








