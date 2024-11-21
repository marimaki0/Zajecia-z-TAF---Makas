function palindrom(str){
  const cleanStr = str.replace(/\s+/g, '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

console.log(palindrom("ANNA"));
console.log(palindrom("kajak"));
console.log(palindrom("kot"));