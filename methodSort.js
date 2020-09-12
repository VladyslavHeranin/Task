
// ответ на вопрос как боротся с методом sort() он меняет первоначальный массив как в этом образце;

function firstSortMethod() {

    const array = [2, 1, 4, 3];

    const firtstChangArray = array.sort((a, b) => b - a).map((x) => x * 10);

    const secondstChangArray = firtstChangArray.sort((a, b) => a - b).map((x) => x * 10);

    console.log(array);

    console.log(firtstChangArray);

    console.log(secondstChangArray);

}

//   зделать клон массива с которым мы работаем и работать с ним

function secondSortMethod() {

    const array = [2, 1, 4, 3];

    const firtstChangArray = [...array].sort((a, b) => b - a).map((x) => x * 10);

    const secondstChangArray = [...firtstChangArray].sort((a, b) => a - b).map((x) => x * 10);

    console.log(array);

    console.log(firtstChangArray);

    console.log(secondstChangArray);

}