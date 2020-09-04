// Условие :извлеч уникальные элементы массив со строки

// first ((выглядит страшно правда ?)но я на этом не останавливаюсь го вниз )

function secondDecision(str) {
    str = str.split(' ')

    let arr = [];

    let obj = {};

    for (let i = 0; i < str.length - 1; i++) {
        x = str[i].slice(0, str[i].length - 1);
        arr.push(x)
    }
    arr.push(str.pop())

    for (let i = 0; i < arr.length; i++) {

        if (obj[arr[i]]) {
            obj[arr[i]] += 1
        } else {
            obj[arr[i]] = 1
        }
    }

    let words = [];
    for (let key in obj) {

            words.push([key].join(''))
    }
    console.log(words)

}

secondDecision('первый, второй, третий, второй')

// second 


function firstDecision(str) {
    str = str.split(' ')

    let arr = [];

    for (let i = 0; i < str.length - 1; i++) {
        x = str[i].slice(0, str[i].length - 1);
        arr.push(x)
    }

    arr.push(str.pop())

    let result = arr.filter((item, index) => {
        return index === arr.indexOf(item)
    })

    console.log(result)
}

firstDecision('первый, второй, третий, второй');


// third (и тут я узнаю что у сплита есть суперспособность которая кидает в топку половину кода)

function thirdDecision(str){
    str = str.split(',')
    let result = str.filter((item, index) => {
        return index === str.indexOf(item)
    })
    console.log(result)
}

thirdDecision('первый, второй, третий, второй');

