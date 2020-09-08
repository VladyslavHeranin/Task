// условие задачи поменять указаные элементы на свой 
// у задачи есть два решения 
// first(проверка на "if" это наш элемент значит присваиваю ему новое значение)

function replaceAll(find, replace, str) {
    for (let index = 0; index < str.length; index++) {
        if (str[index] === find) {
            str[index] = replace
        }
        console.log(str[index]);
    }
};

//  replaceAll('a', 'x','abc def def lom abc abc def');

// second(здесь я делаю проверку по индексу)

function replaceAll(find, replace, str) {
    for (let i = 0; i < str.length; i++) {
     if (str.indexOf(find) > -1) {
            str = str.replace(find, replace);          
        }
    }
    console.log(str)
}

 replaceAll('abc', 'x', 'abc def def lom abc abc def');
