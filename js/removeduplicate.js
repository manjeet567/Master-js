function aa(arr){
const arrr=Array.from(new Set(arr))
return arrr
}
console.log(aa([1,4,5,2,3,1,5,6,1,4,5,6,2,1,4]))


function aaa(arr){
    const arrr=arr.reduce((acc,curr)=>{
        if(!acc.includes(curr)){
            acc.push(curr)
        }
        return acc
    },[])
    return arrr
}
console.log(aaa([1,4,5,2,3,1,5,6,1,4,5,6,2,1,4]))