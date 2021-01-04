const cursos = document.querySelectorAll('.curso');

const teste = Array.from(cursos);

const objetoCursos = teste.map((item) => {
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas').innerText;
  return {
    titulo, // titulo: titulo;
    descricao,
    aulas,
    horas
  };
});

console.log(objetoCursos);


const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosFiltrados = numeros.filter((n) => {
  return n > 100 ? n : '';
});

console.log(numerosFiltrados);


const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const baixo = instrumentos.some((item) => {
  return item === 'Baixo';
});

console.log(baixo);


const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },

  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },

  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },

  {
    item: 'Queijo',
    preco: 'R$ 10,60'
  }
];


const toNumber = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
  return acumulador + precoLimpo;
}, 0);

console.log(toNumber);
