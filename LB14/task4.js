function findUnique(arr) {
    return arr.length === new Set(arr).size;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));
