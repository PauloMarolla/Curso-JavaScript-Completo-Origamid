const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

//um tipo de forEach, porem usando for of
// a const pode ser qualquer valor, porem o of é o objeto
for (const fruta of frutas) {
  console.log(fruta);
}

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const lis = document.querySelectorAll('li');

for (const li of lis) {
  li.classList.add('ativo');
  console.log(li);
}

for (const pro in window) {
  console.log(`${pro} ${window[pro]}`);
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
