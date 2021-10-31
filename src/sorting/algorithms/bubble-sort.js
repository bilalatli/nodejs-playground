const bubbleSort = (arr) => {
    const count = arr.length;
    for (let j = 0; j < (count - 1); j++) {
        for (let i = 0; i < (count - j - 1); i++) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    return arr;
};

module.exports = bubbleSort;
