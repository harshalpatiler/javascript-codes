Function.prototype.myBind = function(obj={}, ...args){
    if( typeof this !== 'function'){
         throw new Error('this is not callable');
    }
       
     obj.func = this;
     return function(...innerargs){
         return obj.func(...args, ...innerargs)
     }
     
};

let ob = {
    name: 'harsha'
} 
function getname(age, num){
    console.log("my name is " + this.name + ' & age is '+ age + " and salary is $ "+num)
};
let data = getname.myBind(ob,78)
console.log(data(9888888))