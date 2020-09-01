let str = 'HelloWord'

function camel_case(str){
    let result = []

for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
        result.push("_", str[i])
    } else
        result.push(str[i])
}

console.log(result.splice(1).join('').toLowerCase());
}


camel_case(str);