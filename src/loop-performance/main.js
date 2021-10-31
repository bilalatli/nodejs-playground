const bench = require('nanobench')

const loopCount = 1000000000;

// Sum all numbers in range `0-n` and compare process times

const do_while_loop = (num) => {
    let i = 0;
    let sum = 0;
    do {
        sum += i;
        i++;
    } while (i < num);
    return sum;
};

const while_loop = (num) => {
    let i = 0;
    let sum = 0;
    while (i < num) {
        sum += i;
        i += 1;
    }
    return sum;
};

const for_loop = (num) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    return sum;
};


// Performance calculator
const performance = (callback, num) => {
    const startTime = (new Date()).getTime();
    const sum = callback(num);
    const endTime = (new Date()).getTime();
    return {time: ((endTime - startTime)), total: sum};
};

const start = () => {
    bench('While loop', (b) => {
        b.start();
        while_loop(loopCount);
        b.end();
    });

    bench('For loop', (b) => {
        b.start();
        for_loop(loopCount);
        b.end();
    });

    bench('Do-While loop', (b) => {
        b.start();
        for_loop(loopCount);
        b.end();
    });
};

start();
