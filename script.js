import initScrollSuave from './modules/scroll-suave.js'
import initAnimacaoScroll from './modules/scroll-animacao.js'
import initAccordion from './modules/accordion.js'
import initTabNav from './modules/tabNav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdwn-menu.js'
import initFuncionamento from './modules/date-object.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initfetchBitcoin from './modules/fetch-bitcoin.js'
import Countdown from './modules/countdown.js'


initScrollSuave()
initAnimacaoScroll()
initAccordion()
initTabNav()
initModal()
initTooltip()
initDropdownMenu()
initFuncionamento()
initFetchAnimais()
initfetchBitcoin()
// Countdown()

const diasParaONatal = new Countdown('24 december 2025 23:59:59 GMT-0300')
const diasParaOAnoNovo = new Countdown('31 december 2025 23:59:59 GMT-0300')
const diasParaOMeuNiver = new Countdown('14 May 2026 00:00:01 GMT-0300')

console.log(diasParaONatal.total)

// setInterval(() => {
// console.log(diasParaOMeuNiver.total)

// }, 5000)

console.log(diasParaOAnoNovo.total)
console.log(diasParaOMeuNiver.total)

// import $ from 'jquery'
// import _ from 'lodash'



           "feat: Starting webpack and babel" 





