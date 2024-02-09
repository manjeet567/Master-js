//Longest Common Prefix

let str=['flow','flower','flight']
var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    for (let i = 0; i <= strs[0].length; i++) {
        if (!strs.every((string) => string[i] === strs[0][i])) {
            return strs[0].slice(0, i);
        }
    }
    return strs[0];
};

//console.log(longestCommonPrefix(str))


///  merge two shoretd list

let l1=[1,2,3]
let l2=[1,3,4]

var mergeTwoLists = function (list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    }
    else {
        console.log('fdgfff',list1.next,list1.val)
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}

console.log(mergeTwoLists(l1,l2))


//remove duplicaate from an array///

let arrrr=[0,5,8,6,4,9,5,2,4,1,6,4,2,5,7,8,1]
function removeDuplicate(arr){
if(arr.length==0) return 0
let a=0
for(let i=0;i<arr.length;i++){
    if(arr[a]!=arr[i]){
        a++
        arr[a]==arr[i]
    }
}
return a+1
}
console.log(removeDuplicate(arrrr))