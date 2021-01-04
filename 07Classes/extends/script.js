class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log('acelelrou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    // adicionando arg a classe extendida, e precisa passar os arg da classe pai junto
    super(rodas, combustivel);
    this.capacete = capacete;
  }

  // metodos iguais, a classe extendida sobreescreve a classe padrao
  acelerar() {
    // super faz ativar tanto a classe extendida como a classe pai
    super.acelerar();
    console.log('acelerou rapido');
  }
  empinar() {
    console.log('moto empinou ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2, 'gasolina', true);
const civic = new Veiculo(4);