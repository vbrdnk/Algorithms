// binary search with recursion
function binarySearch(numArray, key) {
    let middleIndex = Math.floor(numArray.length / 2);
    let middleElem = numArray[middleIndex];

    if (middleElem === key) {
        return true;
    } else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIndex, numArray.length), key);
    } else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIndex), key);
    }
    else {
        return false;
    }
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 43));



// factorial function with recursion
function factorial(num) {
    if (num === 2) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));
console.log(factorial(4));