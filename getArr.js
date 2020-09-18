var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [7, 8, 9];

let arr = [a, b, c]

let result = [];


function getArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].reverse().join(' '))
    }
    console.log(result.reverse().join(' '));
}
getArr(arr)