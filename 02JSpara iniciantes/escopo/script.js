function mostrarCarro() {
  var carro = 'fusca';
  console.log(carro);
}

mostrarCarro(); // fusca no console
//console.log(carro); // carro is not defined

// blocos


if(true) {
  var mes = 'dezembro'; //a variavel VAR vaza os escopos de blocos
  console.log(mes);
}

console.log(mes);


// CONST E LET

{
  var carro2 = 'bmw';
  const ano = 2018;
}

console.log(carro2); //da console
//console.log(ano);  apenas da erro


for(let i = 0; i < 10; i++){ // usar sempre LET para loops
  console.log(i);
}


const data = {
  ano: 2018,
  mes: 'dezembro'
};

data.ano = 2019; // vai funcionar, pois nao estou mudando a variavel, e sem as propriedades
data.dia = 25; // posso adicionar novas propriedades ao CONST

//data = 'isso'; nao posso mudar a variavel q é CONST


// EXERCICIOS


{
  var cor = 'preto';
  const marca = 'fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}


function somarDois(x) {
  const dois = 2;
  return x + dois;
}

function dividirDois(x) {
  const dois = 2;
  return x / dois;
}

console.log(somarDois(2));
console.log(dividirDois(2));


const numero = 50;


for(let numero = 1; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);