const imgs = document.querySelectorAll('img');

// imgs.forEach(function(img, index, array) {
//   //console.log(img, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item) {
  //console.log(item)
});


imgs.forEach((img, index, array) => {
  //console.log(img, index, array);
});

let i = 0;

//imgs.forEach(function()
//{ console.log(i++)
//});

imgs.forEach(() => console.log(i++));

// EXERCICIOS

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => {
  console.log(item);
});

paragrafos.forEach((item) => {
  console.log(item.innerText);
});


// EXERCICIOS PARA RESOVLER ERROS

//const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// }); 

// let i = 0;

// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);