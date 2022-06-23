//For object to make it iterable
//Suppose an object 
/*
obj ={
name:"lalit",
age:24
}

Object.keys(obj) -> gives an array with keys of object -> [name,age] 

*/


//My solution
//solution1
const obj1 ={
    name:"lalit",
    age:24,
    friend:"human"
}

const obj2 ={
    name:"lalit",
    age:24,
    friend:"kamal"
}
// let len = Object.keys(obj1).length
let isSame = true

// for (let i=0;i<len;i++){
//     if (obj1[Object.keys(obj1)[i]] == obj2[Object.keys(obj2)[i]]){
//         isSame = true    
//     }
//     else{
//         isSame = false
//     }
// }


// console.log(isSame)

//solution2
//Optimal solution

Object.keys(obj1).forEach(function(key){
    if (obj1[key] == obj2[key]){
        isSame = true    
    }
    else{
        isSame = false
    }
})

console.log(isSame)