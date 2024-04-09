let arr=[1,5,7,4,2,3,6,4,1,5,8,4,2,6,9,5,1,4,7,5,2,3,6]
let result={}

for(let i=0;i<arr.length;i++){
    let num=arr[i]
    if(!result[num]){
        result[num]=[]
    }
    result[num].push(num)
}

for(let key in result){
    console.log(result[key])
}