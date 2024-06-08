function findLargestNumber(arr){
    return Math.max(...arr)    
}
let ans = findLargestNumber([89,2,3,32,21,1,99]);
console.log(ans)

//-----------using sort method of an array-------------

// function findLargestNumber(arr){
//     let sortedArr = arr.sort((v1, v2)=>{
//         return v2 - v1
//     })  
//     return sortedArr[0]
// }
// let ans = findLargestNumber([89,2,3,32,21,1,99]);
// console.log(ans);

//-----------using for loop on array-------------------

// function findLargestNumber(arr){
//     largestNumber = arr[0]; 
//     for(let i = 0; i < arr.length; i++){
//         if( arr.at(i) > largestNumber){
//             largestNumber = arr.at(i)
//         }
//     }
//     return largestNumber;
//    }
//    let ans = findLargestNumber([89,2,3,32,21,1,99]);
//    console.log(ans);
