
var str = 'Java Script';

function strin(lock, simb, str) {
    if (lock === "after") {
        console.log(str.slice(str.indexOf(simb)))
    } if (lock === "before") {
        console.log(str.slice(0, str.indexOf(simb)))
    } else {
        return str
    }
}

strin("before", "о", str)
