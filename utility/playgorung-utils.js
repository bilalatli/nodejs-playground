const randomInteger = (min, max) => {
    return Math.floor((Math.random() * (max - min)) + min);
};

const dummyNumericArrayGenerator = (itemCount, range) => {
    const dummyArray = [];
    for (let i = 0; i < itemCount; i++) {
        dummyArray.push(randomInteger(0, range));
    }
    return dummyArray;
};


module.exports = {randomInteger, dummyNumericArrayGenerator};
