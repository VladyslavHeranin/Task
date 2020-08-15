
let string = 'sSpoE  Rt';

string = string.split('')

let newString = [];

for (let i = 0; i < string.length; i++) {

    if (string[i] === string[i].toLowerCase()) {
        newString[i] = string[i].toUpperCase()
    } else {
        newString[i] = string[i].toLowerCase()
    }
}


console.log(newString.join(''))
