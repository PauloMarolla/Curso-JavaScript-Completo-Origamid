const doc = fetch('./doc.txt');

doc
  .then((response) => response.text())
  .then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
    console.log(body);
  });

const cep = fetch('https://viacep.com.br/ws/13503300/json');

cep
  .then((r) => {
    return r.json();
  })
  .then((response) => {
    console.log(response);
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = response.logradouro;
  });

// quando usar text = pra puxar arquivo HTML, pra mostrar o json como formato de texto, para puxar texto, corpo de arquivo css, corpo de arquivo js

const css = fetch('./style.css');

css
  .then((r) => {
    return r.text();
  })
  .then((r) => {
    const style = document.createElement('style');
    const conteudo = document.querySelector('.conteudo');
    style.innerHTML = r;
    conteudo.appendChild(style);
  });

const sobre = fetch('./sobre.html');

const div = document.createElement('div');

sobre
  .then((r) => {
    return r.text();
  })
  .then((r) => {
    const conteudo = document.querySelector('.conteudo');
    div.innerHTML = r;
    conteudo.appendChild(div);
  });


