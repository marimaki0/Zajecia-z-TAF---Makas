function range(a, b){
  let result = [];

    for (let k = a; k <= b; k++) {
        result.push(k);
    }

    return result;
}

console.log(range(3, 10)); 

