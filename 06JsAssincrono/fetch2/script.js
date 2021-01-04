// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima


const inputCep = document.querySelector('input');

inputCep.addEventListener('change', ativarCep);

function ativarCep(event) {
  event.preventDefault();
  const cep = inputCep.value;
  const infoCep = document.querySelector('.infocep');

  const cepLocation = fetch(`https://viacep.com.br/ws/${cep}/json/`);

  cepLocation.then((response) => {
    return response.text();
  })

    .then((r) => {
      infoCep.innerText = r;
    })
}


setInterval(valorBtc, 1000 * 30);

function valorBtc() {
  const Coin = fetch(`https://blockchain.info/ticker`);

  Coin.then((response) => {
    return response.json();
  }).then((r) => {
    const resultadoCoin = document.querySelector('.resultadocoin');
    resultadoCoin.innerText = ('R$ ' + r.BRL.buy).replace('.', ',');
  })
}

const btnChuck = document.querySelector('.btnchuck');
const resultadoPiada = document.querySelector('.resultpiada');

btnChuck.addEventListener('click', piadaChuck);

function piadaChuck() {
  const chuck = fetch(`https://api.chucknorris.io/jokes/random`);

  chuck.then((response) => {
    return response.json();
  }).then((r) => {
    resultadoPiada.innerText = r.value;
  })

}






