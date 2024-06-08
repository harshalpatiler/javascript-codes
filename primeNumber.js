function primeNumber(num){
   
    for(let i = 2; i <= num/2; i++){
        if(num % i === 0){
            return false
        }
      }
 return true
 }
let ans = primeNumber(33);
console.log(ans);