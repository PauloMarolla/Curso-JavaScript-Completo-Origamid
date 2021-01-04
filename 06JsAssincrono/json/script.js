//JSON.parse transforma qualquer strign q se pareca com json, em json

const configuracoes = {
  player: 'google',
  tempo: 25.5,
  aula: '2.1 JavaScript'
}

const stringConfig = JSON.stringify(configuracoes);

console.log(stringConfig);

// transforma objeto em uma string parecida com formato JSON