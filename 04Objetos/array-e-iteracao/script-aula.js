const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// const li = document.querySelectorAll('li');

// li.forEach((item) => {item.classList.add('ativa')});

// o MAP tem a mesma funcao do foreach, porém os dados da array podem ser modificados
const novaArray = carros.map((item, index, array) => {
  console.log(item, index, array);
  return item.toUpperCase();
});

console.log(novaArray);

const numeros = [2, 4, 6, 23, 5];
//forma q pode ser escrita
const novoNumeros = numeros.map(n => n * 2);

console.log(novoNumeros);

// MAP vs FOREACH
// Se quiser uma nova array com novos valores, tem q usar map
// Se não quiser mudar classe e nao retornar nada, apenas add classe, utilizar o foreach

const aulas = [
  {
    nome: 'HTML1',
    min: 15
  },

  {
    nome: 'HTML2',
    min: 10
  },

  {
    nome: 'CSS1',
    min: 20
  },

  {
    nome: 'JS1',
    min: 25
  }
];

let tempo = 0;
const tempoAulas = aulas.map((item) => {
  return tempo += item.min;
});

console.log(tempo);


// const nomeAulas = (aula) => {
//   return aula.nome;
// };
const nomeAulas = (aula) => aula.nome;


const arrayNomeAulas = aulas.map(nomeAulas);

console.log(arrayNomeAulas);





const aulas2 = [10, 25, 30];

//tem 2 parametros a mais, o contador/acumulador, e o valora inicial
//funciona igual o map, precisa do return
const reduceAulas = aulas2.reduce((acumulador, item) => {
  return acumulador + item;
}, 0);

console.log(reduceAulas);






const numeros2 = [10, 3, 40, 25, 32, 24];

const maiorNumero = numeros2.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
}, 0);

console.log(maiorNumero); 





//sempre colocar o return dentro de uma constante, para usar o return de outra forma no restante do codigo
// return é apenas o valor que vc quer q saia da array

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});

console.log(listaAulas);





const frutas = ['Pera', 'Maca', 'Uva', '', 'Melancia'];
// sintaxe exatamente igual map e foreach
//retorna TRUE ou FALSE, e se por acaso, algum item for TRUE, ele para a verificação
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
});

console.log(temUva);





//sintaxe igual do map e foreach
//retorna TRUE ou FALSE, diferente do some, ele olha todos, se for true ele continua, se for false, para a funcao
const todosVerdadeiros = frutas.every((fruta) => {
  return fruta;
});

console.log(todosVerdadeiros);
// precisa do return
const maiorQue2 = numeros2.every(n => n > 2);

console.log(maiorQue2);




// retorna o INDEX quando a condição for TRUE
const frutaIndex = frutas.findIndex((item) => {
  return item === 'Uva';
});

console.log(frutaIndex);



// retorna o primeiro valor do item q for TRUE
const frutaItem = frutas.find((item) => {
  return item;
});

console.log(frutaItem);


const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maça'];
// filter retorna SEMPRE array, os valores q sao TRUE, ele coloca na array
// QUANDO N TEM RETURN, ELE RETORNA TUDO UNDEFINED
const filterFrutas = frutas1.filter((item) => {
  return item;
});

console.log(filterFrutas);


// retorna o item das arrays, sempre
const maiores15 = aulas.filter((item) => {
  return item.min >= 15;
});

console.log(maiores15);


