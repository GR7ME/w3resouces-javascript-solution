const obj1 ={
    name:"lalit",
    age:24,
    friend:"kamal"
}

const obj2 ={
    name:"lalit",
    age:24,
    friend:"kamal"
}
let len = Object.keys(obj1).length
let isSame = true

for (let i=0;i<len;i++){
    if (obj1[Object.keys(obj1)[i]] == obj2[Object.keys(obj2)[i]]){
        isSame = true    
    }
    else{
        isSame = false
    }
}


console.log(isSame)
