function anagramStrings(str1, str2){
    let $str1 = str1.split('').sort().join("");
    let $str2 = str2.split('').sort().join("")
    return $str1 === $str2
}
let ans = anagramStrings('silent','listen');
console.log(ans);