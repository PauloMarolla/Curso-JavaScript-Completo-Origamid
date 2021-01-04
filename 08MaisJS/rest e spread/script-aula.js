//REST
function perimetroForma(lado, totalLados = 4, ...args) {
  //totallados = totallados || 4;
  //console.log(arguments); //arraylike - pega todos arg
  args.forEach(item => console.log(item))
  // o resto retorna apenas os argumentos q não foram utilizados, e é uma array de fato
  return lado * totalLados;
}

perimetroForma(10, 4, 20, 'oi', 'teste'); // 40
perimetroForma(10); // NaN


function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}

anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');


// SPREAD

const frutas = ['Banana', 'Morango', 'Uva'];
const legumes = ['Cenoura', 'Pimentao'];
//o spread coloca item por item, se nao passasse como spread, a fruta e legume seria um array dentro de array
const comidas = [...frutas, 'Pizza', ...legumes];

console.log(comidas);

// MAth Max, passa argumento por argumento, o spread transforma a array em cada item
const numeroMaximo = Math.max(4, 5, 20, 10, 30, 2, 33, 5); // 33

const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread);


//transformando arraylike em array com spread
const btns = document.querySelectorAll('button');
const btnArray = [...btns];

console.log(btnArray);


