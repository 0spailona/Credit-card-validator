import validator from "./validator";
import paymentSystemsNames from "./dataCards/paymentSystemsNames";

export default class ValidateForm {
  constructor(minSizeNumber, maxSizeNumber) {
    this.minSizeNumber = minSizeNumber;
    this.maxSizeNumber = maxSizeNumber;
  }

  bindToDOM() {
    const containerEl = document.querySelector('#widget-container');

    this.cardsContainerEl = document.createElement('div');
    this.cardsContainerEl.classList.add('cards');

    this.visaEl = document.createElement('div');
    this.visaEl.classList.add('card', `${paymentSystemsNames.visa}`);
    this.cardsContainerEl.appendChild(this.visaEl);

    this.masterEl = document.createElement('div');
    this.masterEl.classList.add('card', `${paymentSystemsNames.mastercard}`);
    this.cardsContainerEl.appendChild(this.masterEl);

    this.jcbEl = document.createElement('div');
    this.jcbEl.classList.add('card', `${paymentSystemsNames.jcb}`);
    this.cardsContainerEl.appendChild(this.jcbEl);

    this.discoverEl = document.createElement('div');
    this.discoverEl.classList.add('card', `${paymentSystemsNames.discover}`);
    this.cardsContainerEl.appendChild(this.discoverEl);

    this.dinersEl = document.createElement('div');
    this.dinersEl.classList.add('card', `${paymentSystemsNames.diners}`);
    this.cardsContainerEl.appendChild(this.dinersEl);

    this.amexEl = document.createElement('div');
    this.amexEl.classList.add('card', `${paymentSystemsNames.amex}`);
    this.cardsContainerEl.appendChild(this.amexEl);

    this.mirEl = document.createElement('div');
    this.mirEl.classList.add('card', `${paymentSystemsNames.mir}`);
    this.cardsContainerEl.appendChild(this.mirEl);

    containerEl.appendChild(this.cardsContainerEl);

    const formEl = document.createElement('form');
    formEl.classList.add('validateForm');
    formEl.dataset.wiget = 'validate';

    this.inputEl = document.createElement('input');
    this.inputEl.classList.add('validateData');
    this.inputEl.type = 'text';
    this.inputEl.minLength = this.minSizeNumber;
    this.inputEl.maxLength = this.maxSizeNumber;
    this.inputEl.pattern = '[0-9]+';
    this.inputEl.placeholder = '0123456789';
    this.inputEl.addEventListener('input', this.onInput.bind(this))

    formEl.appendChild(this.inputEl);

    this.btnValidate = document.createElement('button');
    this.btnValidate.classList.add('btnValidate');
    this.btnValidate.textContent = 'Validate';

    formEl.appendChild(this.btnValidate);
    formEl.addEventListener('submit', e => this.onClick(e));

    containerEl.appendChild(formEl);

    this.isValidContainer = document.createElement('div');
    this.isValidContainer.classList.add('validateRes');

    this.isValidMessageEl = document.createElement('span');
    this.isValidMessageEl.classList.add('isValidMessage');
    this.isValidMessageEl.textContent = 'Введите номер карты для валидации'
    this.isValidContainer.appendChild(this.isValidMessageEl);

    containerEl.appendChild(this.isValidContainer)

  }

  onClick(e) {
    e.preventDefault();
    const result = validator(this.inputEl.value.trim(), this.minSizeNumber);
    if (result.res) {
      if(result.ps){
        this.showPS(result.ps);
        this.changeMessage('Валидация прошла успешно', 'black');

      } else {
        this.changeMessage('Карта неизвестной платёжной системы', 'darkred');
      }

    } else {
      this.changeMessage('Карта не прошла валидацию', 'darkred');
    }
  }

  onInput(){
    //console.log('onChange')
    const selected = this.cardsContainerEl.querySelector('.cardSelected')
    if(selected){
      //console.log(selected)
      selected.classList.remove('cardSelected');
      this.isValidMessageEl.textContent = 'Введите номер карты для валидации';
    }
  }

  showPS(ps) {
    const cardEl = this.cardsContainerEl.querySelector(`.${ps}`);
    cardEl.classList.toggle('cardSelected')
  }

  changeMessage(message,color){
    this.isValidMessageEl.textContent = message;
    this.isValidMessageEl.style.color = color;
  }

}
