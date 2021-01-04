function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));


function pi() {
  return 3.14;
}

var total = 5 * pi();

console.log(pi());

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
} 

console.log(imc(50, 1.6));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'eu gosto de céu';
  } else if(cor === 'verde') {
    return 'eu gosto de mato';
  } else {
    return 'Não gosto de cores';
  }
}

addEventListener('click', function (){
  console.log('oi');
})


// Aula 2 funcoes 


function imc2(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

imc2(80, 1.5)

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por favor, insira um numero';
  }
  else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

// As variaveis só sao visiveis dentro dos escopos, dentro das chaves

function faltaVisitar(paisesVisitados) {
  const totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados}`;
}

// Aula 3, exercicios

function isTruthy(dado) {
  return !!dado;
}

function perimetroQuadrado(lado) {
  return lado * 4;
}

// function meuNome(nome, sobrenome) {
//   return `Meu nome é ${nome} ${sobrenome}`;
// }

// console.log(meuNome('paulo', 'marolla'));


function ehPar(numero) {
  var modulo = numero % 2;
  if(modulo === 0) {
    return true;
  } else {
    return false;
  }
}

function tipoDado(dado) {
  return typeof dado;
}

function meuNome(nome, sobrenome) {
  return `Meu nome é ${nome} ${sobrenome}`;
}

function meuNome() {
  return console.log(`Meu nome é Paulo Marolla`);
}

// o mesmo serve para o scroll
addEventListener('click', meuNome);



