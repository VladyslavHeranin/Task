const arr = [1, -9, 3, 2];
 
for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
}
 
arr.splice(0, arr.length / 2);
 
console.log(arr);