function findLongestWord(str){
    let arr = str.split(" ");
    let longword = ''
    arr.forEach(( v, i )=>{
        if(v.length > longword.length){
            longword = v;
        }
    }) 
    return  longword;
}
let word = findLongestWord('my name is Harshal and i am engineer');
console.log(word);
//-------------------- using the for of loop---------------------------
// function findLongestWord(str){
//     let arr = str.split(" ");
//     let longword = ''
//     for(let word of arr){
//         if(word.length > longword.length ){
//             longword = word
//         }
//     }
//     return  longword;
// }
// let word = findLongestWord('my name is Harshaaaal and i am engineer');
// console.log(word);