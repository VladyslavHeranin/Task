// TASK 1
let string = "Маша"

let letter = string.split('').shift().toLowerCase();

let changString = string.slice(1);

let result = letter + changString ;

console.log(result);

// TASK 2
let strin = "Mаша"

strin = string.split('');

let result = [];

for (i = 0; i < strin.length; i++) {

    result.push(strin[i].toLowerCase());

}

console.log(result.join(''));

// TASK 3
var str="Маша";

function capitalizeFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

   console.log(capitalizeFirstLetter(str)) ;
