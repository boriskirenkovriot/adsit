function processArray(n, i) {
    return n ? i + n[0].length : -1;
}

// Usage
let arr1 = ["apple", "banana", "cherry"];
let arr2 = [];

console.log(processArray(arr1, 5)); // Output: 10 (5 + 5)
console.log(processArray(arr2, 5)); // Output: -1
