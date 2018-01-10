function meanMedianMode(arrayItem) {
    return {
        mean: getMean(arrayItem),
        median: getMedian(arrayItem),
        mode: getMode(arrayItem)
    };
}

function getMean(arrayItem) {
    let sum = 0;

    arrayItem.forEach(num => {
        sum += num;
    });

    return sum / arrayItem.length;
}

function getMedian(arrayItem) {
    arrayItem.sort((a, b) => a - b);
    let median;

    if (arrayItem.length % 2 !== 0) {
        median = arrayItem[Math.floor(arrayItem.length / 2)];
    } else {
        let midOne = arrayItem[(arrayItem.length / 2) - 1];
        let midTwo = arrayItem[arrayItem.length / 2];
        median = (midOne + midTwo) / 2
    }

    return median;
}

function getMode(arrayItem) {
    let modeObj = {};

    //create modeObj
    arrayItem.forEach(num => {
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
      });

    //create array of mode/s
    let maxFrequency = 0;
    let modes = [];
    for (let num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            modes = [ num ];
            maxFrequency = modeObj[num];
        } else if (modeObj[num] === maxFrequency) {
            modes.push(num);
        }
    }

    if (modes.length === Object.keys(modeObj).length) {
        modes = [];
    }

    return modes;
}

console.log(meanMedianMode([ 1, 2, 3, 4, 5, 4, 6, 1]));