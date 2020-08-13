let randomArr = [9, 207, 5, 3, 0, 7, 1,];
 
const loop = randomArr.length;
 
for (i = 0; i < loop; i++) {
    for (j = 0; j < loop; j++) {
 
        console.log(randomArr[j] > randomArr[j + 1])
        if (randomArr[j] > randomArr[j + 1]) {
            let sort = randomArr[j];
            randomArr[j] = randomArr[j + 1];
            randomArr[j + 1] = sort;
        }
    }
}
console.log(randomArr);