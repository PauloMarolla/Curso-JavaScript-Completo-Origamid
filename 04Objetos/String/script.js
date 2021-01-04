const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39'
  },

  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129'
  },

  {
    descricao: 'Recebimento do Cliente',
    valor: 'R$ 99'
  },

  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129'
  },

  {
    descricao: 'Recebimento do Cliente',
    valor: 'R$ 49'
  },
];


console.log(transacoes);

let somaTaxa = 0;
let somaRecebimento = 0;

transacoes.forEach((item) => {
  if(item.descricao.startsWith('Taxa')) {
    const taxa = +item.valor.replace('R$ ', '');
    somaTaxa += taxa; 
    console.log(somaTaxa);
  } else {
    const recebimento = +item.valor.slice(3); 
    somaRecebimento += recebimento;
    console.log(somaRecebimento);
  }
});

console.log(`O valor final da taxa é ${somaTaxa}`);
console.log(`O valor final do recebimento é ${somaRecebimento}`);

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');

console.log(arrayTransportes);


const html = 
`
<ul>
  <li><span>Sobre<span><li>
  <li><span>Produtos<span><li>
  <li><span>Contato<span><li>
<ul>
`;

console.log(html);

const noSpan = html.split('span').join('a');


console.log(noSpan);

const frase = 'Melhor do ano!';

console.log(frase.slice(-1));

const transacoes2 = ['Taxa do Banco', '  TAXA DO PÃO', '  taxa do mercado', 'deposito bancario', 'TARIFA especial'];


let totalTaxas = 0;
transacoes2.forEach((item) => {
  const taxas = item.trim().toLowerCase();
  if(taxas.startsWith('taxa')) {
    totalTaxas ++;
  }
});

console.log(totalTaxas);

const numbers = [1486, 564, 67, 98, 55];


numbers.sort();


console.log(numbers);