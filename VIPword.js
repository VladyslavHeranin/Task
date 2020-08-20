
function VIPWord(str) {
    let result = {}

    let words = [];

    for (let i = 0; i < str.length; i++) {

        if (result[str[i]]) {
            result[str[i]] += 1
        } else {
            result[str[i]] = 1
        }
    }

    for (let key in result) {

        if (result[key] >= 2) {
            continue;
        } else {
            words.push([key].join(''))
        }
    }
    console.log(words)
}


VIPWord('little big')