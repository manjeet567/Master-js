// Given an array A[] of n numbers and another number x,
//  the task is to check whether or not there exist two elements in A[] whose sum is exactly x.

const a1=[1,3,5,7,34,3]

const twoElementSum=(arr,x)=>{
  for(let i=0;i<arr.length-1;i++){
    for(let j=1;j<arr.length+1;j++){
        if(arr[i]+arr[j]==x){
            return [arr[i],arr[j]]
        }
    }
  }
  return 'no'
}

//console.log(twoElementSum(a1,4))



// Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the
//  maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed.

const buySellStock=(arr)=>{
    let diff=0
    let x=0
    let y=0
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        let aa=arr[j]-arr[i]
        if(aa>diff){
            diff=aa
            x=i
            y=j
        }
    }
}
if(diff<=0){
    return 'do not buy'
}else{
    return `buy on the ${x+1} day and sell on the ${y+1} day`
}
}
console.log(buySellStock([7,6,5,4,3,2,1]))

function maxProfit(prices) {
    let minprice=Infinity; //7
    let maxprofit=0;
    for(let i=0;i<prices.length-1;i++){
        if(prices[i]<minprice){
            minprice=prices[i]
        }else if(prices[i] - minprice >maxprofit){
            maxprofit = prices[i] - minprice
        }
    }
    return maxprofit
}
  const prices = [7, 1, 5, 3, 6, 4];
  console.log('dgfdsf====',maxProfit(prices));


  //  find duplicates

  function findRepeatingNumbers(nums) {
    const repeatingNumbers = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]); // Get the index based on the value (0 to n-1)
        console.log('====',index)
        if (nums[index] < 0) {
            console.log(nums[index])
            repeatingNumbers.push(index); // If the number is already negative, it's a repeating number
        } else {
            nums[index] = -nums[index]; // Mark the number as visited by making it negative
        }
    }

    return repeatingNumbers;
}

// Example usage:
const nums = [1, 9, 3, 1, 3, 6, 6]; // Array containing elements from 0 to n-1 with repeating numbers
//console.log(findRepeatingNumbers(nums));


// Given an array arr[] of n integers, construct a Product Array prod[] (of the same size) 
// such that prod[i] is equal to the product of all the elements of arr[] except arr[i].

// Input: arr[]  = {10, 3, 5, 6, 2}
// Output: prod[]  = {180, 600, 360, 300, 900}
// 3 * 5 * 6 * 2 product of other array 
// elements except 10 is 180
// 10 * 5 * 6 * 2 product of other array 
// elements except 3 is 600
// 10 * 3 * 6 * 2 product of other array 
// elements except 5 is 360
// 10 * 3 * 5 * 2 product of other array 
// elements except 6 is 300
// 10 * 3 * 6 * 5 product of other array 
// elements except 2 is 900

let product = (arr)=>{
for(let i=0;i<arr.length-1;i++){
    let a=1
    for(let j=0;j<arr.length;j++){
        a= a*arr[j]
    }
     console.log(a/arr[i])
}
}
console.log(product([4,3,9,5,1,2]))
