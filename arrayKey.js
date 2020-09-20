let className = ["pink", "dog", "pink", "dog", "pink", "cat"];

let result = {};



for (let i = 0; i < className.length; i++) {
    if (result[className[i]]) {
        result[className[i]] += 1
    } else {
        result[className[i]] = 1
    }
}

console.log(result);

console.log(Object.keys(result))

