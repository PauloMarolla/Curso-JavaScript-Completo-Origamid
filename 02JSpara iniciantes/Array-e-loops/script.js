var videoGames = ['switch', 'ps4', 'xbox'];

// propriedade e motodo array
//POP remove o ultimo item do array e retorna
// PUSH adciona um item na final do array

videoGames.push('3ds');


// inicio, condicao, incremento
for (var numero = 1; numero <= 10; numero++) {
  console.log(numero);
}

var i = 0;
while(i <= 10) {
  console.log(i);
  i++;
}

//aula 2

// var videoGames = ['switch', 'ps4', 'xbox', '3ds'];

// for (var item = 0; item < videoGames.length; item++) {
//   console.log(videoGames[item]);
// }

var videoGames = ['switch', 'ps4', 'xbox', '3ds'];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === 'ps4') {
    break;
  }
}

var frutas = ['banana', 'maca', 'abacaxi', 'uva', 'morango', 'melancia'];

frutas.forEach(function(item) {
  console.log(item);

});

// EXERCICIOS


var campeaoBrasil = [1959, 1962, 1970, 1994, 2002];

campeaoBrasil.forEach(function(item) {
  console.log(`O Brasil ganhou a copa de ${item}`);
});

var frutass = ['banana', 'maca', 'pera', 'uva', 'morango', 'melancia'];

// frutass.forEach(function(fruta) {
//   if(fruta === 'pera') {
//     console.log(fruta);
//     break;
//   }
// });

for (var i = 0; i < frutass.length; i++) {
  console.log(frutass[i]);
  if(frutass[i] === 'pera') {
    break;
  }
}

var ultimaFruta = frutass[frutass.length -1];



