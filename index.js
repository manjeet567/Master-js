//       remove Duplicate value from an array      //

const arr=[20,21,20,23,23,25,1,6,20,24,23]
const arr1=Array.from(new Set(arr))
console.log(arr1)

/////////////////////////////////////////////////////////
let aa=[1,2,3,4,5,6][1,2]
//console.log('jj',aa)
/////////////////////////////////////////////////////////////////
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
// Expected output: 10
console.log(b);
// Expected output: 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
//console.log(rest); //output==[ 30, 40, 50 ]
/////////////////////////////////////////////////////



//        dynamic  properties in object    ///
let dynamic ='value'
let user={
    id:1,
}
user[dynamic]='other value'
console.log('user',user)   //{ id: 2, value: 'other value' }

let user2={
    id:2,
    [dynamic]:"other user2"
}
console.log('user2',user2)  //{ id: 2, value: 'other user2' }

//////////////////////////////////////////////////////////////
///      object to array       //

let numbers={
    one:1,
    two:2
}

let key=[]
for(let number in numbers){
    if(numbers.hasOwnProperty(number)){
        key.push(number)
    }
}
console.log(key)
 
let keyy=Object.keys(numbers)  //[ 'one', 'two' ]
let values=Object.values(numbers)  //[ 1, 2 ]
let entry=Object.entries(numbers)   //[ [ 'one', 1 ], [ 'two', 2 ] ]
console.log(keyy,values,entry)


//////////////////////////////////////////////////////////////
///      array to object   //

let array4=['value1','value2','value3']
console.log({...array4})   //{ '0': 'value1', '1': 'value2', '2': 'value3' }


//////////////////////////////////////////////////////////////
///     populating an  array  //
let arraysize=5
let hhh=[]
for(let i=0;i<arraysize;i++){
    hhh[i]={"hello":"manjeet"}
}
console.log(hhh)

let filledArray=new Array(arraysize).fill(null).map(()=>
({"hello":"godbye"})
)
console.log(filledArray)
//  { hello: 'godbye' },
// { hello: 'godbye' },
// { hello: 'godbye' },
// { hello: 'godbye' },
// { hello: 'godbye' }


let numbersss=[1,2,3,4]
let target=7
let ssss=(num,target)=>{
for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i]+num[j]==7){
          console.log([i,j])
        }
    }
}
}
ssss(numbersss,target)


let arr77=[1,2,1,2,4,5,7,8,1,2,7,2]
function asas(arr) {
    return [...new Set(arr)]
}
console.log(asas(arr77))


let prop ="age"
let person={[prop]:30}
console.log(person.age)

console.log("b"+"a"+ +"a"+"a")

let a2=[1,2,3]
let b2=a2
a2.push(4)
console.log(a2,b2)  //output  [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

let a3=[1,2,3]
let b3=[...a3]  //  its create a shollow copy
a3.push(4)
console.log(a3,b3)  //output  [ 1, 2, 3, 4 ] [ 1, 2, 3 ]  