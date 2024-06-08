Function.prototype.myApply = function(obj={},args=[]){
    if( typeof this !== 'function'){
         throw new Error('this is not callable');
    }
        if( !Array.isArray(args)){
         throw new Error('Arguments should be in array form');
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
getname.myApply(ob,[88])