const data = [
    { name: "Gautam", age: 56, marks: 78},
    { name: "Bhushan", age: 26, marks: 98},
    { name: "Pawan", age: 36, marks: 68},
    { name: "Sunil", age: 16, marks: 88}
    ]

let newdata = data.reduce( (acc, curr)=>{
    acc.push(curr.name.toUpperCase())
    return acc
}, [])
console.log(newdata)

// one line answer

// let newdata = data.map( obj => obj.name.toUpperCase());
// console.log(newdata)
// filtering student having more than 80 marks
// let newdata = data.filter( v => v.marks >80)
// console.log(newdata)
//let newdata = data.filter( v => v.marks >80 && v.age > 20)
// get sum of all students marks
// let newdata = data.reduce((acc, curr)=>{
//     acc += curr.marks
//     return acc
// }, 0)
// console.log(newdata)
