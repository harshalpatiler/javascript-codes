function numberOfVowels(str){
    let vowels = [ 'a', 'e', 'i', 'o', 'u']
    let count = 0;
     for(let i = 0; i < str.length; i++){
         if( vowels.includes(str.at(i).toLowerCase())){
             count++
         }
     }
     return count;
     
 }
 let ans = numberOfVowels('appOle');
 console.log(ans);