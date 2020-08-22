function loc(str, index,subStr) {

    str = str.split('');

    str.splice(index, 0, subStr);

    console.log(str.join(''));

}

loc("l live you", 2,' do not ');
