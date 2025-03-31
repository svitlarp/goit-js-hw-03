// Function that creates a new array with elements that meet the filtercriteria. 
function filterArray(numbers, value) {
    let arr = []
    for (const i of numbers) {
        // console.log(i);
        if (i > value) {
            arr.push(i);
        }
    }
    return arr;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
