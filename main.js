function hello(name){
    const massage = "hello " + name;
    return function(){
        console.log(massage);
    }
}
 
let max = hello('max');
 
max()