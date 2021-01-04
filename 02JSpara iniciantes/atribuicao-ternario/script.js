var numero = 20;
var numero2 = 10;

// **=   %=    +=   -=    /=...
numero += numero2; // numero = numero + numero2;
console.log(numero); 


var idade = 18;

var podeBeber;
var naoPossuiDiabetes = true;

podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'pode beber' : ' nao pode beber';

console.log(podeBeber);


// if simplificado

var possuiFaculdade = true;

if(possuiFaculdade = false)
  console.log('possui')
else
console.log('nao possui');

// EXERCICIOS 

var scroll = 1000;

scroll += 500;

console.log(scroll);


var possuiCarro = true;
var possuiCasa = true;
var darCredito;

//darCredito = (possuiCarro && possuiCasa);
darCredito = (possuiCarro && possuiCasa) ? 'Dar credito' : 'Não dar credito';

console.log(darCredito);
