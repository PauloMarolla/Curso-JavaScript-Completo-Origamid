const url = 'https://jsonplaceholder.typicode.com/posts/';

const options = {
  method: 'POST',
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
}


fetch(url, options).then((response) => {
  return response.json()
}).then((json) => {
  console.log(json);
})

// GET pegar informacoes 
// POST. criar informacoes
// PUT utilizado para atualizar informacoes
// DELETE deletar informacoe
// HEAD puxar apenas os headers

//CORS comunicacao da api com o browser, permissoes e etc