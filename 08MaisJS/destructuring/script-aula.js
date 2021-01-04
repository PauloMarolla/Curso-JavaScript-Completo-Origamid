const carro = {
  marca: 'Honda',
  ano: 2018,
  portas: 4
}

// desestruturando objeto
const { marca, ano } = carro;

console.log(marca);

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

// livros e videos sao uma constantes criadas, n da para declarar esses nomes novamente
// tem q estar no nivel do objeto, cliente.compras.digitais
//const { livros, videos } = cliente.compras.digitais;

const { digitais, fisicas, digitais: { livros, videos } } = cliente.compras;

console.log(fisicas, livros, videos);


const cliente2 = {
  nome: 'paulo',
  idade: 20
}

// valor da chave do objeto tem q ser igual, e o nome da constante para ser acessada, pode ser alterada passando como segundo nome


//Pode-se definir um valor padrao, usando =, se o valor não existir no objeto, vai ser puxado o valor padrao, caso exista, vai puxar o valor do objeto
const { nome: nomeCliente, email = 'teste@homail.com' } = cliente2;

console.log(nomeCliente, email);

// desestruturando array

const frutas = ['Banana', 'Uva', 'Morango'];

const [primeira, segunda, terceira] = frutas;

console.log(primeira, terceira);


//declarando variaveis
const [primeiro, segundo, terceiro] = ['item1', 'item2', 'item3'];

console.log(segundo);

// desestruturando o evento - objeto
function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}


document.addEventListener('keyup', handleKeyboard);




