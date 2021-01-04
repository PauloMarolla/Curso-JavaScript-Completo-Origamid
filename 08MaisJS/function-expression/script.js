const somar = function (a, b) {
  return a + b;
}


//const vezes = (a, b) => a * b;
const vezes = (a, b) => {
  return a * b;
}


const priceNumber = n => +n.replace('R$ ', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));


(() => {
  console.log('oi');
})();
