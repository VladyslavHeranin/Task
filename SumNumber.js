function sumFirst(num) {
    let sum = 0
 
    let arr = [...num.toString()];
 
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i] % 100;
    }
    return sum
 }
 
 function sumSecnd(num) {
    let sum = 0
 
    let arr = num.toString().split('');
 
    for (let i = 0; i < arr.length; i++) {
       sum += Number(arr[i])
    }
    return sum
 }
 
 console.log(sumFirst(145));
 
 console.log(sumSecond(60));