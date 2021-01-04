function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `O nome completo é ${this.nome} ${this.sobrenome}`;
}


const paulo = new Pessoa('paulo', 'marolla', 20);

console.log(paulo);

const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // function
li.innerText; // string
li.value; // number
li.hidden; // bolean
li.offsetLeft; // number
li.click(); // undefined


li.hidden.constructor.name; // retorna string