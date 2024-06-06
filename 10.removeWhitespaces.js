function removeWhiteSpace(str){
    let newStr = '';
    for(let i= 0; i < str.length; i++){
        if(str.at(i) === ' '){
            continue;
        }else{
            newStr += str.at(i)
        }
    }
    return newStr;
   }
   let ans = removeWhiteSpace("  my name is khan  ");
   console.log(ans);