const regexp = /\w+/gi;

const regexp1 = new RegExp(/\w+/, 'gi');

const frase = 'JavaScript e Java linguagem 010';

console.log(frase.replace(regexp1, 'x'));

console.log(regexp.test(frase));
console.log(regexp.test(frase));
console.log(regexp.test(frase));
console.log(regexp.test(frase));

//regexp.flags; 'gi' retorna as flags
//regexp.global; true, retorna se tem a flag ou n
//regexp.ignoreCase; true, verifica se é casesensitive
//regexp.multiline; true, verifica se é multiline
//regexp.source; o valor da regexp \w+

const frase1 = 'JavaScript, TypeScript, CoffeScript, Java';

const rege = /\w+/g;

console.log(rege.exec(frase1));
console.log(rege.exec(frase1));
console.log(rege.exec(frase1));
console.log(rege.exec(frase1));
console.log(rege.exec(frase1)); // null


const resultados = frase1.match(rege);

console.log(resultados);

const regular = /ul/g;

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;
// $& faz referencia a regexp
const result = tags.replace(regular, 'div');


console.log(result);