let arr = 'marta cat';
 
arr = arr.split('');
 
result = [];
 
function ajj(num) { 
    if (['c', 'a'].includes(num)) {
        return false;
    } else {
    return  result.push(num)
        } 
}
 
console.log(arr.filter(ajj));
 
console.log(result.join(''));