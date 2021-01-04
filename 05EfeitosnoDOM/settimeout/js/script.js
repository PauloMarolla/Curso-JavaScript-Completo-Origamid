import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTolltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTolltip();
initDropdownMenu();

// for(let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 300 * i);
// }

// settimeout -- é uma funcao assincrona, e ocorre depois que o script acaba
// setinterval -- faz q nem um loop, adicioandno o delay a todos os itens, um apos o outro
// clearinterval -- retira do os eventos do setinterval do final

const minhaDiv = document.querySelector('.oi');

function corVermelho() {
  minhaDiv.classList.toggle('azul');
}


setInterval(corVermelho, 2000)


const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

let cont = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = cont++; 
  }, 100);
  iniciar.setAttribute('disabled', '');
}


function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');

}

function resetarTempo() {
  cont = 0;
  tempo.innerText = cont;
}


iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);






