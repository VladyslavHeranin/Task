
let persone = {
    name: 'Vlad',
    age: 22,
    sayInfo: function (job, phone) {
        console.group(this.name + " info :")
        console.log("hello  my name is " + this.name)
        console.log("l have " + this.age + " years")
        console.log('my telefone is ' + phone)
        console.log('l whant job in ' + job)
        console.groupEnd()
    }
}

let Mark = {
    name: 'Mark',
    age: 20,
}

//  const info = persone.sayInfo.bind(Mark,'GOOGLE','099-477-6202');
// info();
//  const info = persone.sayInfo.call(Mark,'GOOGLE','099-477-6202');
//  info;
//  const info = persone.sayInfo.apply(Mark,['GOOGLE','099-477-6202']);
// info;