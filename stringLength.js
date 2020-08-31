
function cutString(str, n) {
    let arr = [];
    for (let i = 0; i < str.length; i += n) {
        res = str.slice([i]).split('', n).join('')

        arr.push(res)
    }
    console.log(arr)
}


cutString('круглосуточный', 4)