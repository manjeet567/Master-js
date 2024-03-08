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
