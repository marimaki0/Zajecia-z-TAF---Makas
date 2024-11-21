function isHappyNumber(num){
  while (num !== 1) {
      let sum = 0;
      while (num > 0) {
          let digit = num % 10;
          sum += digit * digit;
          num = Math.floor(num / 10);
      }
    num = sum;
  }
  return num === 1; 
}

console.log(isHappyNumber(19));//true
console.log(isHappyNumber(2));//false
console.log(isHappyNumber(7));//true
console.log(isHappyNumber(4));//false

