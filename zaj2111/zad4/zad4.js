function sum(numbers){
  let result = 0; 
  for (let k = 0; k < numbers.length; k++) {
      result += numbers[k];
  }
  return result;
}

console.log(sum([1,19,5]));