/**
 * A function that returns all the odd values within a given array
 */

//Method 1 - using helper method recursion pattern
let collectOddValues = (arr) => {
    let result = [];
    
    let helper = (helperInput) => {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);
    return result;
}

//console.log(collectOddValues([1,2,3,4,5,5,6,7,8])); // [1,3,5,5,7]

//Method 2 - without using the helper method
let collectOddValues2 = (arr) => {
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5,5,6,7,8])); // [1,3,5,5,7]
console.log([1,3,5,5,7].slice(1));
console.log([1].concat([3]));
console.log([1,3].concat([5]));