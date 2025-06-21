export default class accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }
  toggleAccordion() {
    this.classList.toggle(this.activeClass);
    this.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.accordionList[0].classList.add(this.activeClass);
      this.accordionList[0].nextElementSibling.classList.add(this.activeClass);
      this.addAccordionEvent();
    }
    return this;
  }


};

