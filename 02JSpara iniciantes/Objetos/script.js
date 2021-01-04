var pessoa = {
  nome: 'paulo',
  idade: 20
};

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  // Posso ou nao ter o : function, att ES6+
  perimetro(lado) {
    //this faz referencia a todo o objeto
    return this.lados * lado;
  }
}


console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());
console.log(Math.PI);


// Aula 2


// SET E GET

var menu = {
  width: 800,
  height: 60,
  backgroundColor: '#84e'
}


// Posso mudar o valor de um objeto
menu.backgroundColor = '#000';

// Posso atribuir um valor para o objeto
menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi');
}

var bg = menu.backgroundColor;



var paulo = {
  nome: 'paulo',
  sobrenome: 'marolla',
  idade: 20,
  cidade: 'Rio Claro'
}

paulo.nomeCompleto = function() {
  return console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
}

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}

carro.preco = 3000;

console.log(carro.preco);


var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
      if(pessoa === 'mulher') {
        return 'Não latiu';
      } else {
        return 'O cachorro latiu';
      }
    }
}

console.log(cachorro.latir('homem'));