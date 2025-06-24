export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = this.activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);

    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }
  init() {
    if (this.funcionamento) {
      this.dadosAgora();
      this.dadosFuncionamento();
      this.ativaAberto();
    }
    return this;
  }

}


// --------------X ---GOSTEI ATE O NATAL -----X----------
// const agora = new Date()
// const futuro = new Date('Dec 24 2025 23:59')

// function transformarDias(tempo) {
//     return tempo / (24 * 60 * 60 * 1000)
// }
// const diasAgora = transformarDias(Math.floor(agora.getTime()))
// const diasFuturo = transformarDias(Math.floor(futuro.getTime()))

// console.log(Math.floor(diasFuturo - diasAgora))

