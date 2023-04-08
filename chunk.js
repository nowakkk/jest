const chunkArray = (arr, len) => {
    const chunkedArr= [];

    arr.forEach(val => {
        const last = chunkedArr[chunkedArr.length - 1];

        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val)
        }
    });
    return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));

module.exports = chunkArray;