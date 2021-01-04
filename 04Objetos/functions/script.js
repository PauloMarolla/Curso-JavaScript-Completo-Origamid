const paragrafos = document.querySelectorAll('p');

const totalParagrafos = Array.prototype.reduce.call(paragrafos, (cont, item) => {
  return cont + item.innerText.length;
},0);

console.log(totalParagrafos);


function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : '';
  conteudo ? elemento.innerHTML = conteudo : '';
  return elemento;
}

console.log(criarElemento('li', 'ativo', 'meu conteudo'));

const h1 = criarElemento.bind(null, 'h1', 'titulo');

console.log(h1('cursos de javascript'));





