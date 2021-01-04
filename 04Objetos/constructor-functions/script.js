function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida,
  this.preco = precoAtribuido
}

// Sempre iniciar com letra maiuscula
// honda se torna um novo objeto, baseado no construtor carro

const honda = new Carro('Honda', 4000);

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('mazda', 5000);

// aula 2

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativar');
//   }
// }

// Dom.ativar();
// Dom.seletor = 'ul';
// Dom.ativar();

function Dom(seletor) {
  this.element = function(){
    return document.querySelector(seletor);
  }
  this.ativar= function() {
    this.element().classList.add('ativar');
  }
}

const li = new Dom('li');
const lastLi = new Dom('li:last-child');
lastLi.ativar();

// EXERCICIOS


function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + 'andou e tem ', this.idade, 'anos');
  }
};


const paulo = new Pessoa('paulo ', 20);
const joao = new Pessoa('joão ', 20);
const maria = new Pessoa('maria ', 25);
const vitoria = new Pessoa('vitoria ', 20);

paulo.andar(); 
joao.andar(); 
maria.andar(); 
vitoria.andar(); 

function Dom2(seletor) {
  const ItensSelecionados = document.querySelectorAll(seletor);
  this.elements = ItensSelecionados;

  this.adicionarClasse = function(classe) {
    return ItensSelecionados.forEach((item) => {
      item.classList.add(classe);
    });
  }
  
  this.removerClasse = function(classe) {
    return ItensSelecionados.forEach((item) => {
      item.classList.remove(classe);
    });
  }
};  

const lis = new Dom2('li');
const ul = new Dom2('ul');

lis.adicionarClasse('teste');
lis.removerClasse('teste');

ul.adicionarClasse('ul-teste');




