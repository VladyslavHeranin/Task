const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("start 1")

        const obj = {
            car: 'red',
            car2: 'yello',
            car3: 'pirple',
        }
        resolve(obj)
    }, 2000)
})

p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modifide = true;
            resolve(data);
        }, 2000)
    })

}).then(ClientData =>
    console.log("it ok", ClientData
  
    ));
