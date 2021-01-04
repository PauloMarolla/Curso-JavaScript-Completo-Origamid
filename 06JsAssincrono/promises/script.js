const promesa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'paulo', idade: 20 });
    }, 1000);
  } else {
    reject(Error('um erro ocorreu na promessa'));
  }
});

promesa
  .then((r) => {
    console.log(r);
    return 'teste';
  })
  .then((r) => {
    console.log(r);
  })
  // segundo argumento do then é o catch
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => {
    //funcao executada independente se a promise foi ou n resolvida
    console.log('acabou');
  });

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuario logado');
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

// all retorna todas as promises q forem resolvida, a n ser que alguma de erro
// race ele retorna apenas a primeira promis e q for resolvida
const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
