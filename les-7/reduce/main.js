const arr = [1, 2, 3, 4, 5, 6, 7];

function testReduce(acc, val, index, originalArr) {
    console.log({ acc, val, index });
    return acc + val;
}

Array.prototype.myReduce = function (callback, initialVal) {
    let returnVal;
    let startIndex;
    if (initialVal === undefined) {
        returnVal = this[0];
        startIndex = 1;
    } else {
        returnVal = initialVal;
        startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
        returnVal = callback(returnVal, this[i], i, this);
    }

    return returnVal;
};

console.log(arr.reduce(testReduce));
console.log(arr.myReduce(testReduce));
