function fibonacci(num){
let n1=0;
let n2=1;
let nextTerm;
for(let i=0;i<num;i++){
    console.log(n1)
    nextTerm=n1+n2
    n1=n2;
    n2=nextTerm;
   
}
}
fibonacci(10)

// const number = 20
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }
function sortByKey(array, key) {
    return array.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        } else if (a[key] > b[key]) {
            return 1;
        } else {
            return 0;
        }
    });
}

const arrayOfObjects = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

const sortedArray = sortByKey(arrayOfObjects, 'age');
console.log(sortedArray);