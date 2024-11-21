function fibonacci(n){
  if (n <= 0) return 0; 
  if (n === 1) return 1;

  let a = 0; 
  let b = 1; 

  for (let k = 2; k <= n; k++) {
      let temp = a + b; 
      a = b; 
      b = temp;
  }
  return b;
}

console.log(fibonacci(3));
console.log(fibonacci(6));
console.log(fibonacci(70));