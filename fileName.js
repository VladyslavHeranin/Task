// FIRST

var pathname = "/home/user/dir/file.txt";

function path(pathname) {
    let file = []
    for (let i = pathname.length - 1; i > 0; i--) {
        if (pathname[i] === "/") {
            break;
        }
        file.push(pathname[i])
    }

     file = file.reverse();

   console.log(file.join(''));
};


path(pathname);

// SECOND


var pathname = "/home/user/dir/file.txt";

function path(pathname) {
  let name = pathname.split("/").pop();
  let spl = pathname.split("/")
console.log(name);
console.log(spl)
} 

console.log(path(pathname))




