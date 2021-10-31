const cocktailSort = (arr) => {
    const count = arr.length;
    let left = 0;
    let right = count - 1;

    do {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
        right -= 1;
        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            }
        }
        left += 1;
    } while (left <= right);

    return arr;
};

module.exports = cocktailSort;
