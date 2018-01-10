function twoSum(numArray, sum) {
    // returns every pair of numbers from 'numArray'
    // that adds up to 'sum'
    let pairs = [];
    let hashTable = [];

    for (let i = 0; i < numArray.length; i++) {
        let currElem = numArray[i];
        let counterPart = sum - currElem;
        
        if (hashTable.indexOf(counterPart) !== -1) {
            pairs.push([ currElem, counterPart ]);
        }

        hashTable.push(currElem);
    }

    return pairs;
}

console.log(twoSum([ 1, 6, 4, 5, 3, 3 ], 7));
console.log(twoSum([ 40, 11, 19, 17, -12 ], 28));