// outerHTML = devolve junto as tags html
// innerHTML = devolve o html interno
// innerTEXT = retorna só a escrita

//const h1 = document.querySelector('h1');

//console.log(h1.innerText);
//console.log(h1.outerHTML);

//h1.innerHTML = '<p>Novo modelo<p>'; //insere dentro da tag

//parentElement = pai
//parentElement.ParentElement = pai do pai
//PreviousElementSibling = elemento acimoa
//nextElementSibling = elemento abaxo do html

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement, -- lista.children.length);
console.log(lista.querySelector('li:last-child'));

// TODA TAG HTML É UM ELEMENTO
// NODE são espaços, comentarios e etc..

// console.log(lista.childNodes);
// // Sem o ELEMENT, ele puxa os nodes
// console.log(lista.previousSibling);

// //const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// //const titulo = contato.querySelector('.titulo');

// const mapa = document.querySelector('.mapa');
//appendChild - metodo, move um elemento para dentro de outro, o primeiro elemento sendo aonde vc quer q ele vá, e o segundo o elemento que deseja mover
// insertBeforo - metodo, mesmo principio do appendClid, porém, leva 3 argumentos, o ultimo argumento tem q ter filho do segundo

// removeChild. remove o elemento

//replaceChild, substitui um elemento por outro, seguindo os argumentos do insertBefore

//animais.appendChild(titulo);

//contato.removeChild(titulo);
//contato.replaceChild(mapa ,titulo);

//contato.insertBefore(mapa ,titulo /*titulo é filho de animais*/);

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'novo titulo';
// novoH1.classList.add('titulo');

// mapa.appendChild(novoH1);

//console.log(novoH1);

//////////////////////////////////////////

// const titulo = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = titulo;
// titulo, titulo2, novoTitulo são todos os mesmos elementos

// const h1 = document.querySelector('h1');
// const fa1 = document.querySelector('.faq');

// const cloneH1 = h1.cloneNode(true /* o true passa tudo oq tiver dentro junto*/);

// cloneH1.classList.add('azul');
// faq.appendChild(cloneH1);

// EXERCICIOS

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const novoMenu = menu.cloneNode(true);

copy.appendChild(novoMenu);

const dl = document.querySelector('dl');
const dt = dl.querySelector('dt');
const primeiroDd = dt.nextElementSibling;

console.log(dt);
console.log(primeiroDd.remove());

const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');

faq.innerHTML = animais.innerHTML;










