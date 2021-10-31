const combSort = (arr) => {
    let count = arr.length;
    let gap = count;
    let swapped = true;

    while (gap > 1 || swapped) {
        if (gap > 1) {
            gap = Math.floor(gap / 1.24733);
        }
        let i = 0;
        swapped = false;
        while (i + gap < count) {
            if (arr[i] > arr[i + gap]) {
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                if (!swapped) {
                    swapped = true;
                }
            }
            i++;
        }
    }
    return arr;
};

module.exports = combSort;
