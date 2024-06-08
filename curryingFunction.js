function evaluate(operation){
    return function(a){
        return function(b){
            if(operation === "sum"){
                return a+b
            };
            if( operation === "mul"){
                return a*b
            };
            if( operatoin === "sub"){
                return a-b
            };
            if( operation === "div"){
                return a/b
            };
        }
    }
}
let ans = evaluate('sum')(2)(3);
console.log(ans)    