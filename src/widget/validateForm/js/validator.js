import paymentSystemsData from "./dataCards/paymentSystemsData";

export default function validator(value, minSize) {

  let arr = value.split('').map(x => Number(x)).reverse();

  if (arr.findIndex(x => isNaN(x)) !== -1) {
    return {res: false, ps: undefined};
  }

  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      res += arr[i];
    } else {
      let x = arr[i] * 2;
      x = x > 9 ? x - 9 : x;
      res += x;
    }
  }

  return res % 10 === 0 ? {res: true, ps: whatIsPaymentSystem(value.slice(0, minSize))} : {res: false, ps: undefined};
}

function whatIsPaymentSystem(value) {
  const number = parseInt(value);
  let ps = undefined;
  for (const psObj of paymentSystemsData) {
    if (psObj.IIN.filter(x => x.min <= number && x.max >= number).length !== 0) {
      ps = psObj.name;
      break
    }
  }
  return ps;
}
