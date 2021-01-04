// const carro = new Object({
//   marca: 'Honda',
//   ano: 2018
// });

// console.log(carro);

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this; //faz referencia ao objeto carro
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro).init('honda');
const ferrari = Object.create(carro).init('Ferrari');
// primeiro busca o valor o proprio objeto, e depois no construtor
console.log(honda.acelerar());
console.log(ferrari.acelerar());

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou ';
  },
  buzinar() {
    return 'bunizou '
  },
}

const moto = {
  rodas: 2,
  capacete: true
}

Object.assign(moto, funcaoAutomovel);
// ele vai herdar as funcoes do funcaoautomovel, e reescrever os valores por cima, se existirem em ambos objetos
console.log(moto);

const moto2 = {
  capacete: true
}

Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false, // por padrao é false
    writable: false, //por padrao é false
    enumerable: false //por padrao é false
  }
})

const moto3 = {
  capacete: true
}

Object.defineProperties(moto3, {
  rodas: {
    get() {
      return this._rodas; // o _ serve para fica rapenas no get/set
    },
    set(valor) {
      this._rodas = valor * 4 + ' Todas todas';
    }
  }
})

console.log(moto3);

// pega as configuracoes das arrays, number, windows e etc
//Object.getOwnPropertyDescriptor(window, innerHeight);

//Object.getOwnPropertyNames(Array);


const frutas1 = ['Banana', 'Pera'];
const frutas2 = ['Banana', 'Pera'];

// false, pois os objetos frutas1 e 2 sao diferentes
console.log(Object.is(frutas1, frutas2));

const car = {
  marca: 'Marca',
  ano: 2018
}

Object.freeze(car); //Não permite nenhum tipo de mudança
Object.seal(car); //Não permite novas pripriedades, porem permite mudar valores existentes
Object.preventExtensions(car); //Não permite adicionar propriedades, mas permite excluir existentes

//true ou false, e funcioan com seal e preventextensions
console.log(Object.isFrozen(car));





