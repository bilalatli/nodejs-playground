const bench = require('nanobench')
const {dummyNumericArrayGenerator} = require('./../../../utility/playgorung-utils');
const bubbleSort = require('./algorithms/bubble-sort');
const cocktailSort = require('./algorithms/cocktail-sort');
const combSort = require('./algorithms/comb-sort');
const insertionSort = require('./algorithms/insertion-sort');
const selectionSort = require('./algorithms/selection-sort');
const mergeSort = require('./algorithms/merge-sort');
const quickSort = require('./algorithms/quick-sort');

const showOutput = false;
const dummyArray = dummyNumericArrayGenerator(50000, 20000000);
// const dummyArray = dummyNumericArrayGenerator(10, 100);

const start = () => {
    bench('Javascript Native Sort', (b) => {
        b.start();
        const ordered = dummyArray.sort((x, y) => {
            return x - y;
        });
        if (showOutput) console.log(ordered);
        b.end();
    });
    bench('Bubble Sort', (b) => {
        b.start();
        const ordered = bubbleSort(dummyArray);
        if (showOutput) console.log(ordered);
        b.end();
    });
    bench('Cocktail Sort', (b) => {
        b.start();
        const ordered = cocktailSort(dummyArray);
        if (showOutput) console.log(ordered);
        b.end();
    });
    bench('Comb Sort', (b) => {
        b.start();
        const ordered = combSort(dummyArray);
        if (showOutput) console.log(ordered);
        b.end();
    });
    bench('Insertion Sort', (b) => {
        b.start();
        const ordered = insertionSort(dummyArray);
        if (showOutput) console.log(ordered);
        b.end();
    });
    bench('Selection Sort', (b) => {
        b.start();
        const ordered = selectionSort(dummyArray);
        if (showOutput) console.log(ordered);
        b.end();
    });
    bench('Merge Sort', (b) => {
        b.start();
        const ordered = mergeSort(dummyArray);
        if (showOutput) console.log(ordered);
        b.end();
    });
    bench('Quick Sort', (b) => {
        b.start();
        const ordered = quickSort(dummyArray, 0, dummyArray.length - 1);
        if (showOutput) console.log(ordered);
        b.end();
    });
};


start();
