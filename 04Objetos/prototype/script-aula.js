// esta ligado a qualquer funcao, e retorna um objeto3

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}

Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}

//const paulo = new Pessoa('paulo', 20);

//console.log(Pessoa.prototype);
// undefined, pois e um objeto, e nao funcao console.log(paulo.prototype); 

const pais = 'Brasil';
// ambos sao string, porem a cidade é criada com o construtor string, e retorna um objeto com a string
// pais retorna a string apenas
const cidade = new String('Rio');

// PROTOTIPOS DE NUMEROS, STRINGS, ARRAYS E AFINS
// A PARTIR DISSO, EU VEJO AS PROPRIEDADES E METODOS Q CADA UM POSSUI

const listaAnimais = ['cachorro', 'galinha', 'cavalo'];

const lista = document.querySelectorAll('li');

//const listaArray = Array.from(lista); // linkado a funcao array 
const listaArray = Array.prototype.slice.call(lista); // linkado ao prototipo


// OQ IMPORTA É OQ RETORNA
// carro retorna objeto,  carro.marca retorna String, carro.preco retorna number
//carro.andar não executa a funcao, entao tem acesso ao prototipo de funcao
//carro.andar() executa funcao e retorna boleano, entao o prototipo, é de boleano e nao funcao
const carro = {
  marca: 'ford',
  preco: 2000,
  andar() {
    return true;
  }
}

//.constructor.name - retorna o tipo de valor







