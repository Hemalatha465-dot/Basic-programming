function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  
console.log(isPrime(8));

//it is another branch
function isEvenOdd(num) {
  if (num % 2 === 0) return true;  
  else return false;             
}

console.log(isEvenOdd(4)); 
console.log(isEvenOdd(7)); 