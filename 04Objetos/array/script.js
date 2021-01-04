const comida = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const primeiraComida = comida.shift();
const ultimaComida = comida.pop();

console.log(primeiraComida);
console.log(ultimaComida);

comida.push('Arroz');
comida.unshift('Peixe', 'Batata');

console.log(comida);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

estudantes.sort();
estudantes.reverse();

console.log(estudantes);
console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));


let html =
`
<section>
  <div>Sobre</div>
  <div>Produtos</div>
  <div>Contato</div>
<section>
`;

html = html.split('section').join('ul').split('div').join('li');
//html = html.join('ul');

//html = html.split('div');
//html = html.join('li');

console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const novosCarros = carros.slice();

carros.pop();

console.log(carros);


console.log(novosCarros);

