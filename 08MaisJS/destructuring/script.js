// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
//window.getComputedStyle - pega os estilos do botao, TODOS
const { backgroundColor, color, margin } = getComputedStyle(btn);


console.log(backgroundColor, color, margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';
// invertendo as variaveis
[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const { cor: bobCor } = cachorro;

console.log(bobCor);
