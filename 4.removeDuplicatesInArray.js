function removeDuplicate(arr){
    return [...new Set(arr)]
}
let ans = removeDuplicate([1,3,2,3,2,1,3,4]);
console.log(ans)

//--------------------using for loop---------------
// function removeDuplicate(arr){
//     let uniquearr = []
//     for(let i = 0; i <= arr.length - 1; i++){
//         if( ! uniquearr.includes(arr[i])){
//           uniquearr.push(arr[i])
//         }
//     }
//     return uniquearr
// }
// let ans = removeDuplicate([1,3,2,3,2,1,3,4]);
// console.log(ans);
// const arr = [1,3,2,3,2,1,3,4]
// let unique = arr.reduce((acc, curr)=>{
//   if(!acc.includes(curr)){
//       acc.push(curr)
// }
//   return acc
// },[])
// console.log(unique)