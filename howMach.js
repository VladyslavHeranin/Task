let num = ["bus", "car", "car", "car", "cow", "bus"];

let obj = {};

for (let i = 0; i < num.length; i++) {
    if (obj[num[i]]) {
        obj[num[i]] += 1
    } else {
        obj[num[i]] = 1
    }
}

let result = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

console.log(result);