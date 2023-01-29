// array rotation in javascript
const rotateArray = (arr, n) => {
    let rotatedArray = arr.slice(n, arr.length).concat(arr.slice(0, n));
    return rotatedArray;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let n = 2;
console.log(rotateArray(arr, n));