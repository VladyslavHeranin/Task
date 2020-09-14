let str = 'adawewacf';

function cutString(str, n) {

    str = str.split('')

    let res = []

    for (let i = 0; i < str.length; i++) {
        if ([i] % n === 0) {
            res.push(' ', str[i]);
        } else (res.push(str[i]))
    }
    console.log(res.splice(1).join(''))

};
cutString(str, 4)