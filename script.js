import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdwn-menu.js';
import initFuncionamento from './modules/date-object.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initfetchBitcoin from './modules/fetch-bitcoin.js';
import Countdown from './modules/countdown.js';



const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[herf^="#"]');
scrollSuave.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();


initAnimacaoScroll();
initDropdownMenu();
initFuncionamento();
initFetchAnimais();
initfetchBitcoin();
// Countdown()

const diasParaONatal = new Countdown('24 december 2025 23:59:59 GMT-0300');
const diasParaOAnoNovo = new Countdown('31 december 2025 23:59:59 GMT-0300');
const diasParaOMeuNiver = new Countdown('14 May 2026 00:00:01 GMT-0300');

console.log(diasParaONatal.total);

// setInterval(() => {
// console.log(diasParaOMeuNiver.total)

// }, 5000)

console.log(diasParaOAnoNovo.total);
console.log(diasParaOMeuNiver.total);
