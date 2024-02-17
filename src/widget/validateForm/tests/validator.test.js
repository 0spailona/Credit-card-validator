import validator from "../js/validator";

test('Should return ps === undefined with res === true', ()=>{
  const card = '6396636007574213';
  const minSize = 8;
  const result = validator(card,minSize);
  expect(result.ps).toBe(undefined)
})

test('Should return ps === undefined with res === false', () =>{
  const card = '123456789';
  const minSize = 8;
  const result = validator(card,minSize);
  expect(result.ps).toBe(undefined)
})

const checkCardsList = [
  ['4724118471377934','visa'],
  ['2200700166408939','mir'],
  ['5599090493638925','mastercard'],
  ['2221003550293560','mastercard'],
  ['3536356197764775','jcb'],
  ['6011244784393769','discover'],
  ['36728450884980','diners'],
  ['30439992635379','diners'],
  ['347417942088954','amex'],
  ['371596580802013','amex'],
]
const handler = test.each(checkCardsList);
handler('Should validate card number %i',(number,ps) => {
  const minSize = 8;
  const result = validator(number,minSize);
  expect(result.ps).toBe(ps)
})
