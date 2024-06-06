Function.prototype.myCall = function(obj={}, ...args){
    if( typeof this !== 'function'){
         throw new Error('this is not callable');
    }
     obj.func = this;
     obj.func(...args)
};

let ob = {
    name: 'harsha'
} 
function getname(age){
    console.log("my name is " + this.name + ' & age is '+ age)
};
getname.myCall(ob,32)
