// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// }

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
    //return this.element(); faz retornar direto a funcao dentro da classe
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, 'blue');
  }
}
const blueButton = new Button('comprar', 'blue');

const botaoAzul = Button.blueButton('clique');


console.log(blueButton.appendTo('body'));


// usando objeto como funcao construtora

class Butao {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}

const redOptions = {
  backgroundColor: 'red',
  text: 'comprar',
  color: 'white'
}

const redButton = new Butao(redOptions);

const redButtonStatic = Butao.createButton('comprar', 'red');

console.log(redButtonStatic);