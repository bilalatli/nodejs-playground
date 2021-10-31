const merge = (arr1, arr2) => {
    let res = [],
        i = 0,
        j = 0;

    if (arr1.length > 1) {
        let min = 0;
        for (let i = 0; i < arr1.length; i++) {
            if (i !== min) {
                if (arr1[i] < arr1[min]) {
                    //also swap the elements
                    [arr1[i], arr1[min]] = [arr1[min], arr1[i]];
                    //change the minimum
                    min = i;
                }
            }
        }
    }

    if (arr2.length > 1) {
        let min = 0;
        for (let i = 0; i < arr2.length; i++) {
            if (i !== min) {
                if (arr2[i] < arr2[min]) {
                    [arr2[i], arr2[min]] = [arr2[min], arr2[i]];
                    min = i;
                }
            }
        }
    }

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        res.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        res.push(arr2[j]);
        j++;
    }

    return res;
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.ceil(arr.length / 2);

    let arr1 = arr.slice(0, mid);

    let arr2 = arr.slice(mid);

    let arr1_subArrays = [],
        sorted_arr1_subArrays = [];

    let arr2_subArrays = [],
        sorted_arr2_subArrays = [];

    for (let i = 0; i < arr1.length; i += 2) {
        arr1_subArrays.push(arr1.slice(i, i + 2));
    }

    for (let i = 0; i < arr2.length; i += 2) {
        arr2_subArrays.push(arr2.slice(i, i + 2));
    }

    for (let i = 0; i < arr1_subArrays.length; i += 2) {
        let result = merge(arr1_subArrays[i], arr1_subArrays[i + 1]);
        result.forEach((value) => sorted_arr1_subArrays.push(value));
    }

    for (let i = 0; i < arr2_subArrays.length; i += 2) {
        let result = merge(arr2_subArrays[i], arr2_subArrays[i + 1]);
        result.forEach((value) => sorted_arr2_subArrays.push(value));
    }

    return merge(sorted_arr1_subArrays, sorted_arr2_subArrays);
}

module.exports = mergeSort;
