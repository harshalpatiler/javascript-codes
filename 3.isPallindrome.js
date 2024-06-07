function pallindrome(str){
    let newstr = ''
    for(let i = str.length - 1; i >=0; i--){
        newstr += str[i]
    }
    return str === newstr ? true : false
}
let ans = pallindrome("apple");
console.log(ans);

//----------using predefined methods-------
// function pallindrome(str){
//     let newstr = str.split('').reverse().join("")
//      return str === newstr ? true : false;
// }
// let ans = pallindrome("hello");
// console.log(ans)