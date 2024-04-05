function longestWord(sent){
const splitwords=sent.split(' ')
let count=0
let index=0
console.log(splitwords)
for(let i=0;i<splitwords.length;i++){
    if(count<splitwords[i].length){
        count=splitwords[i].length
        index=i
    }
}
return splitwords[index]
}
console.log(longestWord('hello my name is manjeet'))