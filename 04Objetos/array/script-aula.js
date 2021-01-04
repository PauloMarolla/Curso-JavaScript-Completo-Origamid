//const carros  = new Array('Ford', 'Fiat', 'Honda');

//carros[2] = 'Ferrari'; //substitui o valor
//carros[20] = 'Kia'; //add a posicao 20, e deixa a array vazia

//console.log(carros);

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li);

console.log(li);
console.log(arrayLi);

// construcao objeto q parece array

const obj = {
  0: 'paulo',
  1: 'ricardo',
  2: 'marolla',
  length: 3 // precisa da propriedade lenght
}

const arrayObj = Array.from(obj);

console.log(obj);
console.log(arrayObj);

Array.of('teste', 'oi'); // cria array normalmente
//Array(20) array vazia com 20 itens

const frutas = ['Banana', 'Pera', ['Uva Roxa', 'Uva Verde']];

console.log(frutas); // 3 itens na array
console.log(frutas[1].length);
console.log(frutas[2][0].length); //acessando array dentro de array

const instrumentos = ['Guitarra', 'Baixo', 'Violao'];
instrumentos.sort(); // organiza em ondem alfabetica

console.log(instrumentos);

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort(); //vai de caracter em caracter, ou seja, 1,2.. e nao em ordem crescente, nao é ideal usar sort em array de numeros

console.log(idades);


const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia', 'Ferrari'); //add no inicio da array, e RETORNA o valor total da array
const novosCarros = carros.push('Parati', 'Gol'); // add no fim da array, e RETORNA o valor total da array

console.log(carros);
console.log(novosCarros); //retorna apenas o length da array

//console.log(carros.pop()); //retorna o ultima item e tira ele da array
console.log(carros.shift()); //tira o primeiro item da array, e retorna o item

carros.reverse(); //inverte a array, e modifica ela

console.log(carros);
//primeira valor é dps de que item vc quer mudar, e o segundo se quer remover items
console.log(carros.splice(2, 0, 'Fusca')); //retorna oq removeu e modifica a array
console.log(carros);

// substitui tudo da array pelo q for passado, e os valores sao
//a partir de que item
// até que item
console.log(['item1', 'item2', 'item3', 'item4'].fill('Banana', 1, 3));


// METODOS QUE NAO MODIFICAM A ARRAY

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

const transportes = transporte1.concat(transporte2);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');

console.log(transportes);
console.log(maisTransportes);

const linguagens = ['html', 'css', 'js', 'php', 'phyton', 'js'];

linguagens.includes('css'); // retorna TRUE
linguagens.includes('ruby'); // retorna FALSE
linguagens.indexOf('phyton'); // retorna 4, posicao da array
linguagens.indexOf('js'); // retorna 2, posicao da array
linguagens.lastIndexOf('js'); // retorna 5, ultima posicao do item na array
linguagens.join(); // 'retorna html,css,js,php,phyton,js'
linguagens.join(''); // 'retorna htmlcssjsphpphytonjs'
linguagens.join(' '); // 'retorna html css js php phyton js'
linguagens.join('-_-'); // 'retorna html-_-css-_-js-_-php-_-phyton-_-js'

let htmlString = '<h2>Titulo Principal</h2>';

htmlString = htmlString.split('h2'); //corta o valor passado
htmlString = htmlString.join('a'); //adiciona o valor no final de cada item

console.log(htmlString);

const lang = ['html', 'css', 'js', 'php', 'phyton', 'js'];

const novoLang = lang.slice(); //retorna a array, pode ser passado 2 argumento, do inicio até o final... pode ser usado para clonar array
console.log(lang.pop());
console.log(lang);
console.log(novoLang);





