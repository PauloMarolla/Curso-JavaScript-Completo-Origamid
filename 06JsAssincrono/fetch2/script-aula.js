const imagem = fetch('./imagem.png');

imagem.then((response) => {
  return response.blob();
}).then((r) => {
  const blobURL = URL.createObjectURL(r);
  const imagemDom = document.querySelector('img');
  imagemDom.src = blobURL;
})

const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then((r) => {
  // clone para cloar uma response
  const text = r.clone();

  text.text().then((text) => {
    console.log(text);
  })

  r.json().then((jaison) => {
    console.log(jaison);
  })
}).then((response) => {
  console.log(response);
})

const cep2 = fetch('https://viacep.com.br/ws/01001000/json/');

cep2.then((response) => {
  //response.status
  //response.url
  //response.type
  response.headers.forEach(console.log);
})