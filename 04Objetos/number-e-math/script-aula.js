console.log(Number.isInteger(40)); //TRUE OU FALSE

console.log(Number.parseInt('459.78')); //verefica se eh intero e retorna number
//console.log(Number.parseInt('459 reais')); 

console.log(Number.parseFloat('459.78')); //retorna flooat da string

const preco = 10.3916;

console.log(preco.toFixed(2)); //retorn string, arredonda o numero, e pode ser passada quantas casas decimais quiser

console.log(preco.toString()); // transforma number pra string

let valor = 48.49;

valor = valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
//valor = valor.toLocaleString('en-US', {style:'currency', currency:'USD'});
// transforma em string
console.log(valor);
console.log(Math.PI);
console.log(Math.abs(-3)); //transforma negativo em positivo
console.log(Math.ceil(3.1)); // Arredonda sempre o valor acima
console.log(Math.floor(3.9)); // Arredonda sempre o valor pra baixo
console.log(Math.round(7.9)); // Arredonda ao inteiro mais proximo
console.log(Math.max(7, 75, 20, 45)); // retorna o maior numero
console.log(Math.min(7, 1, -2, 70, 63)); // retorna o menos numero
console.log(Math.random()); // retorna um numero aleatorio de 0 a 1

// pode passar math dentro de math
const aleatorio = Math.round(Math.random() * 100);
const aleatorio2 = Math.floor(Math.random() * (40 - 20 + 1) + 20);

console.log(aleatorio);
console.log(aleatorio2);


 
