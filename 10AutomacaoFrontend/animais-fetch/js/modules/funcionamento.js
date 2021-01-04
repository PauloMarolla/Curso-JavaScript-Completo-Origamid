export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  console.log(horarioAberto);

  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

// const agora = new Date();

// const futuro = new Date('Dec 31 2020 23:59');

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(diasFuturo - diasAgora);

// agora.getDate(); //pega o dia, de 0 a 30
// agora.getDay(); // dia da semana, de 0 a 6
// agora.getHours(); // pega a hora exata
// agora.getFullYear(); //pega o ano
// agora.getMonth(); // pega o  mes de 0 a 11
// agora.getMinutes(); //pega os minutos
// agora.getTime(); // pega ms desde 1970
// agora.getUTCHours(); // -3. Brasilia
