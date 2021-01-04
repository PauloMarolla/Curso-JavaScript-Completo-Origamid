// const comida = 'Pizza';

// const agua = new String('Agua');

// console.log(comida.length);

// const frase = 'A melhor comida';

// console.log(frase[frase.length -1]);
// console.log(frase.charAt(frase.length -1));

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase.concat(linguagem, '!!', 'oi');

const fruta = 'banana';
const listaFrutas = 'Melancia, banana, abacaxi';

console.log(listaFrutas.includes(fruta));
console.log(fruta.includes(listaFrutas));

// console.log(fruta.startsWith('Ba')); false
// console.log(fruta.startsWith('ba')); true
// console.log(fruta.endsWith('na')); true

const transacao1 = 'Depósito do cliente';
const transacao2 = 'Depósito do fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao3.slice(0,3));
console.log(transacao3.slice(0,-3)); // corta os ultimos 3 carac
console.log(transacao3.slice(-3)); // pega os ultimos 3 carac
console.log(transacao3.slice(3)); // corta os primeira carac

console.log(fruta.indexOf('a'));
console.log(fruta.lastIndexOf('a')); // retorna a posicao da ultima letra

const listaPrecos = ['RS 99', 'RS 199', 'RS 1200'];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, '.'));
});

const repeticao = 'ta';

console.log(repeticao.repeat(5));

let listaItens = 'Camisas Bones Calcas Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ');
// se n for utilizado regular expression, so substituira o primeiro

console.log(listaItens);
// transforma qualquer string em array
const arrayLista = listaItens.split(', ');
//const arrayLista = listaItens.split(''); se n pssar nada, quebra cada letra

console.log(arrayLista);


const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';


//console.log(sexo1 === 'feminino');
console.log(sexo1.toLowerCase() === 'feminino');

const valor = '   R$ 23.00   ' ; //remove os espaços fora do valor

console.log(valor.trim());
//console.log(valor.trimStart()); apenas comeco
//console.log(valor.trimEnd()); apenas fim


