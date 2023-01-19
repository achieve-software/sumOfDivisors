// 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
// console.log(sumOfDivisors(12)) // output: 28

const number = 12;
let sum = 0;
function sumOfDivisors(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      sum = sum + i;
    }
  }
  return sum;
}

console.log(sumOfDivisors(number));
