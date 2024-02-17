
export default function toNumberWithLength(arr, length, max) {
  const n = length - arr.length;
  const str = arr.join('');
  let number = parseInt(str) * 10 ** n;
return max ? number + 10 ** n - 1 : number
}

