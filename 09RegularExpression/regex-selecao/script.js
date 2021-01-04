const frase = 'JavaScript';
const padrao = /a/;
const fraseNova = frase.replace(padrao, 'b');

console.log(fraseNova);


//cep /\d{5}[-\s]?\d{3}/g

///cpf /(?:\d{3}[.-]?){3}\d{2}/g

//cnpj /\d{2}[.-]?(?:\d{3}[.-]?){2}\/?\d{4}[.-]?\d{2}/g

//email /[\w.-]+@[\w-]+\.[\w-.]+/gi