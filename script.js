import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import Funcionamento from './modules/date-object.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import Countdown from './modules/countdown.js';
import SlideNav from "./modules/slide.js";


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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();


fetchAnimais('./animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');


const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl('.custom-controls');
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
