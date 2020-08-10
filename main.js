let first = [1, 2, 2, -3, 34, -5, 6, 0];

let second = [9, 6, 7, 4, 5, 1, 23, 4, 0, 5, 4, -3];

let result = []

for (let i = 0; i < first.length; i++) {

    for (let j = 0; j < second.length; j++) {

        if (first[i] === second[j]) {
            result.push(second[j])     
        }else{
            continue ;
        }
   
    }

}
   console.log(result)

