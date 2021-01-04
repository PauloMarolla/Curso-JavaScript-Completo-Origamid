function somar(n1, n2) {
  return n1 + n2;
}

// metodo de funcao, retorna o total de argumentos

console.log(somar.length);
console.log(somar.name);


// CALL functions

window.marca = 'Carro';
window.ano = 155;

function descricaoCarro(velocidade) {
  console.log(this);
  console.log(this.marca + ' ' + this.ano + velocidade);
}

// O call faz referencia a um novo objeto
//o objeto principal do descricaoCarro é window, porém abaixo faz referencia ao objeto q vc passa como argumento

descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);


// const carros = ['Ford', 'Fiat', 'Honda'];
// const frutas = ['Banana', 'Uva', 'Pera'];

// frutas.forEach.call(carros, (item) => {
//   console.log(item);
// });

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li,(item) => {
  return item.classList.contains('ativo');
});


console.log(filtro);

// Apply, transforma cada item da array, e um argumento separado

// Bind, faz o mesmo que o call, porém não é ativado de inicio, você tem que ativar a funcao, e pode ser usada diversas vezes


const $ = document.querySelectorAll.bind(document);

console.log($('section'));

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
// os objetos tem q serem parecidos

const honda = {
  marca: 'Honda'
}
//o bind faz o objeto this ser honda, e não mais o objeto carro.
const acelerarHonda = carro.acelerar.bind(honda, 100);

console.log(acelerarHonda(20));