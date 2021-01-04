async function puxarDados() {
  try {
    const pegarDados = await fetch('./dados.json');
    const jsonDados = await pegarDados.json();
    document.body.innerText = jsonDados.aula;
  } catch (erro) {
    console.log(erro);
  }
}

puxarDados();


//async sempre usado em funcao
// try, tente fazer essa funcao
// catch, senao pega o erro
// try e catch, bem parecido com if e else


async function puxeiDados() {
  const responseDados = fetch('./dados.json');
  const responseClientes = fetch('./clientes.json');

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados);
  console.log(jsonClientes);
}

puxeiDados();