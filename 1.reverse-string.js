function reverseString(str){
    let newstr= '';
    for(let i = str.length -1; i >= 0; i-- ){
        newstr += str[i]        
    }
    return  newstr;
}
let val = reverseString("happy, coder")
console.log(val);

// function reverseString(str){
//     let reversestring = str.split("").reverse().join("")
//     return reversestring; 
// }
// let data = reverseString("happy, coder")
// console.log(data)