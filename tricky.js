console.log(!!"false"==!!"true")
//outpot=====true
// !! is the double NOT operator. It is used to convert a value to its corresponding boolean equivalent.
//  The first ! negates the value, and the second ! negates it again, effectively converting the value to a boolean.

// The expression "false" is a non-empty string, and when converted to a boolean using !!,
//  it becomes true. Similarly, "true" is a non-empty string, and its boolean equivalent is also true.



let x= true === [];
let y = true === ![];
console.log(x+y,x,y)

//output==  0,false,false

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log(isNaN('hello'));

function mul(x){
    return function (y){
        return x*y
    }
}
console.log(mul(2)(2))

function fac(n){
    if(n<1){
        return 1
    }
    return n* fac(n-1)
}
console.log(fac(6))

console.log("This is a string." instanceof String)
console.log(018 - 015);
console.log('rrr',false =='0');

let xx=true==[]
let yy=true==![]
console.log(xx,yy,false===![],false==[],!'',!{},018,015)
console.log(!'',![1,2,3])

let cc=false || {name:"manjeet"} || 2
console.log(cc)